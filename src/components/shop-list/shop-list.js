import React from "react";
import ShopListItem from "../shop-list-item";
import "./shop-list.sass"

const ShopList = ({items,deleteItem}) => {

    return (
        <div className="shop-list-container">
            <div className="shop-list">
                <div className="shop-list-title">
                    <span>Product</span>
                    <span>Category</span>
                    <span>Price</span>
                </div>

                <ul>
                    {
                        items.map((item, index) => {
                            return (
                                <li key={index + 1}>
                                    <ShopListItem item={item} deleteItem={deleteItem}id={item.id}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};
export default ShopList;