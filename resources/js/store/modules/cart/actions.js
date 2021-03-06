import Cart from '../../../apis/Cart';

export function addProductToCart({ commit }, { product, quantity }) {
    commit('ADD_TO_CART', { product, quantity });
    Cart.store({
        product_id : product.id,
        quantity
    });
}

export function addProductToCartFromDB({ commit }) {
    Cart.all()
        .then((res) => {
        commit('SET_TO_CART_ITEM_FROM_DB',res.data);
    });
}

export function removeCartItem({ commit }, productId) {
    commit('REMOVE_SINGLE_ITEM_FROM_CART', productId);
    Cart.delete(productId);
}

export function clearAllTheCart({ commit }) {
    commit('CLEAR_ALL_CART');
    Cart.deleteAll();
}
