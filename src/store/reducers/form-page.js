import actions from "redux-form/lib/actions";

const initialState = {
    items: 'Test'
};

export default  (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
};



