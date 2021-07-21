const addItem = (newItem) => {
    return {
        type: "ADD_ITEM",
        payload: newItem
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
