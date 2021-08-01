import React from "react";
import "./shop-list-item.sass"


const ShopListItem = ({item, deleteItem, id}) => {
    const {product, category, price} = item;

    ShopListItem.propTypes = {
        product: (props, propName) =>
            (typeof props[propName] !== 'string') ?
                new Error("A title must be a string") :
                (props[propName].length <= 5) ?
                    new Error(`title is over 20 characters`) :
                    null,
        category: (props, propName) =>
            (typeof props[propName] !== 'string') ?
                new Error("A title must be a string") :
                (props[propName].length <=5) ?
                    new Error(`title is over 20 characters`) :
                    null

    }
    return (
        <div className="shop-list-item">
            <div className="item">
                {product}
            </div>
            <div className="item">
                {category}
            </div>
            <div className="item">
                {price} $
            </div>
            <div>
                <button onClick={() => deleteItem(id, price)}>Delete</button>
            </div>
        </div>
    );
};
export default ShopListItem;

