const initialState = {
    items: [],
    totalPrice: null,
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
            const removeItem = action.payload;
            console.log(removeItem+'reduc')
            const index = state.items.findIndex(({id}) => id === removeItem)
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




