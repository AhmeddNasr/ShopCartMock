import React from "react";

const Item = (props) => {
    let itemID = props.itemID;
    return (
        <div className="item" id={`item-${props.itemID}`}>
            <p className="item-display">{props.itemName}</p>
            <button
                onClick={() => props.handleClick(itemID)}
                className="add-item-button"
                id={props.itemID}
            >
                Add Item
            </button>
        </div>
    );
};

export default Item;
