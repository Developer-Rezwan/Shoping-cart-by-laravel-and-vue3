export function countCartItem(state) {
    return state.cart.length;
}

export function totalPrice(state) {
    let total = 0;
     state.cart.forEach(item => {
        total += item.product.price * item.quantity ;
    });
    return total;
}
