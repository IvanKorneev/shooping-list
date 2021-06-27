const addItem = (newItems,id) => {
    return {
        type: "ADD_ITEM",
        payload: {newItems,id}
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
