import React from "react";

const Cart = (props) => {
    let items = [];
    props.cartItems.forEach(function (item) {
        items.push(<li>{item}</li>);
    });
    return items;
};

const cartSideBar = (props) => {
    
}

export default Cart;
export { cartSideBar };