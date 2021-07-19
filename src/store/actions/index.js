const addItem = (newItems, id) => {
    return {
        type: "ADD_ITEM",
        payload: {newItems, id}
    };
};
const removedFromCartItem = (removedId,price) => {
    return {
        type: "REMOVED_FROM_ITEM",
        payload: {removedId,price}
    };
}
export {
    addItem,
    removedFromCartItem
};
