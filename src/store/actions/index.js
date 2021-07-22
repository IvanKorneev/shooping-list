const addItem = (newItem) => {
    return {
        type: "ADD_ITEM",
        payload: newItem
    };
};
const removedFromCartItem = (removedId, price) => {
    return {
        type: "REMOVED_FROM_ITEM",
        payload: {removedId, price}
    };
};

const getInfoLocalStorage = (newStorage) => {
    return {
        type: 'GET_INFO_LOCAL_STORAGE',
        payload: newStorage
    }
}
export {
    addItem,
    removedFromCartItem,
    getInfoLocalStorage
};
