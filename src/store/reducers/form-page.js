const initialState = {
    items: []
};

export default  (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const newItem = action.payload;
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };
        case 'REMOVED_FROM_ITEM':
            const removedItem = action.payload;
            const index = state.items.findIndex(({id}) => id === removedItem)
            return {
                ...state,
                items: [
                    ...state.items.slice(0, index),
                    ...state.items.slice(index + 1)
                ]
            }
        default:
            return state;
    }
};




