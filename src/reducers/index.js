const initialState = {
    items: ['lala', 'trolo']
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ITEMS_LOADED':
            return {
                products: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
