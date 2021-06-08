const initialState = {
    item:[]
};

export default  (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_LOADED':
            return {
                ...state,
                showBar: action.payload
            };
        default:
            return state;
    }
};

