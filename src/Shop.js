import React, { useState } from "react";
import Nav from "./Nav";
import Item from "./Item";
import Cart, { cartSideBar } from "./Cart";

const Profile = () => {
    let [cartItems, setCartItems] = useState([]);

    let addItem = (item) => {
        let newCart = [...cartItems];
        newCart.push(item);
        setCartItems((cartItems = newCart));
        console.log(cartItems);
    };

    return (
        <div id="container">
            <Nav cartItems={cartItems} />
            <h1>Shop</h1>
            <div id="catalogue">
                <Item
                    itemID={"1"}
                    itemName={"Item-1"}
                    handleClick={(i) => addItem(i)}
                />
                <Item
                    itemID={"2"}
                    itemName={"Item-2"}
                    handleClick={(i) => addItem(i)}
                />
                <Item
                    itemID={"3"}
                    itemName={"Item-3"}
                    handleClick={(i) => addItem(i)}
                />
            </div>
            <div id="cart">
                <ul>
                    <Cart cartItems={cartItems} />
                </ul>
            </div>
        </div>
    );
};

export default Profile;
