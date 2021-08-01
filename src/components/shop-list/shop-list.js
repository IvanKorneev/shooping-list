import React from "react";
import ShopListItem from "../shop-list-item";
import "./shop-list.sass"

const ShopList = ({items, deleteItem}) => {
    const elements = items.map((item) => {
        const {id} = item;
        return (
            <li key={id}>
                <ShopListItem item={item} deleteItem={deleteItem} id={id}/>
            </li>
        )
    })

    return (
        <div className="shop-list-container">
            <div className="shop-list">
                <div className="shop-list-title">
                    <span>Product</span>
                    <span>Category</span>
                    <span>Price</span>
                </div>

                <ul>
                    {elements}
                </ul>
            </div>
        </div>
    );
};
export default ShopList;