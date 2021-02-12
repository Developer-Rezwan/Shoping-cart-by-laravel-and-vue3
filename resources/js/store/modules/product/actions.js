import Product from '../../../apis/Product';

export function getProducts({ commit }) {
    Product.all()
        .then((res) => {
        commit('SET_PRODUCTS', res.data);
    });
}
export function getProduct({commit} , productId) {
    Product.show(productId)
        .then(res => {
            commit('SET_PRODUCT', res.data);
        });
}

