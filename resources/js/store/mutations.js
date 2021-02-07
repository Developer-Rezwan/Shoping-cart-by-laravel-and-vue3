// All product list for Homepage
export function SET_PRODUCTS (state, products) {
    state.products = products;
};

//Single product by Id
export function SET_PRODUCT (state, product) {
    state.product = product;
};

export function ADD_TO_CART(state, { product, quantity }) {
    let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
    });
    if (productInCart) {
       return productInCart.quantity += quantity;
    }
    state.cart.push({ product, quantity });
}


