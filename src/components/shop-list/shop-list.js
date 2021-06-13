import React from "react";
import ShopListItem from "../shop-list-item";

const ShopList = ({items}) => {
    return (
        <div>
           <span>Product</span>
           <span>Category</span>
           <span>Price</span>
            <ul>
                {
                    items.map((item, index) => {
                        return (
                            <li key={index + 1}>
                                <ShopListItem item={item} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};
export default ShopList;