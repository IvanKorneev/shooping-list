import React from "react";

const ShopListItem = ({item}) => {
    const {product, category, price} = item.items
    return (
        <div>
            <div>
                {product}
            </div>
            <div>
                {category}
            </div>
            <div>
                {price}
            </div>
        </div>
    );
};
export default ShopListItem;