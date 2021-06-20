import React from "react";
import "./shop-list-item.sass"
const ShopListItem = ({item}) => {
    const {product, category, price} = item.items
    return (
        <div className="shop-list-item">
            <div className="item">
                {product}
            </div>
            <div className="item">
                {category}
            </div>
            <div className="item">
                {price}
            </div>
        </div>
    );
};
export default ShopListItem;