const itemsLoaded = (newItems) => {
    return {
        type: "ADD_ITEM",
        payload:newItems
    }
};
export {
    itemsLoaded
};
