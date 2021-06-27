const addItem = (newItems) => {
    return {
        type: "ADD_ITEM",
        payload: newItems
    };
};
const removedFromCartItem = (removedId) => {
    return {
        type: "REMOVED_FROM_ITEM",
        payload: removedId
    };
}
export {
    addItem,
    removedFromCartItem
};
