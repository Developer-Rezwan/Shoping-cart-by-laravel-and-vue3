export function getProducts({commit}) {
    Api.get('/product')
        .then((res) => {
        commit('SET_PRODUCTS', res.data);
    });
}
export function getProduct({commit} , productId) {
    Api.get(`/product/${productId}`)
        .then(res => {
            commit('SET_PRODUCT', res.data);
        });
}

export function addProductToCart({commit} , {product , quantity}) {
    commit('ADD_TO_CART', { product, quantity });
}
