const initialState = {
    items: []
};

export default  (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const newItem = {
               items:action.payload
            }
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };
        default:
            return state;
    }
};




