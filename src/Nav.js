import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    let itemCount;
    useEffect(() => {
        itemCount = 0;
        let temp = [];
        props.cartItems.forEach(function (item) {
            if (!temp.includes(item)) {
                itemCount++;
                temp.push(item);
                console.log(itemCount);
            }
        });
    });

    return (
        <div id="navbar">
            <div id="nav-items">
                <Link id="logo" className="nav-item" to="/profile">
                    Home
                </Link>
                <p id="cart" className="nav-item">
                    Cart: {itemCount}
                </p>
            </div>
            <hr />
        </div>
    );
};

export default Nav;
