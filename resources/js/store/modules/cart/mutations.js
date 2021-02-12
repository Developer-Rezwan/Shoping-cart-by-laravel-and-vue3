export function ADD_TO_CART(state, { product, quantity }) {
    let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
    });
    if (productInCart) {
       return productInCart.quantity += quantity;
    }
    state.cart.push({ product, quantity });
}

export function SET_TO_CART_ITEM_FROM_DB(state , cartItems) {
    return state.cart = cartItems;
}

export function REMOVE_SINGLE_ITEM_FROM_CART(state , productId) {
    state.cart = state.cart.filter((item) => {
        return item.product.id !== productId;
    });
}

export function CLEAR_ALL_CART(state) {
    return state.cart = [];
}
