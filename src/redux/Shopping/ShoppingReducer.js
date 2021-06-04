import * as actionTypes from './ShoppingTypes';

const INITIAL_STATE = {
    cart: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CARD:
            console.log(action.payload);
            return {
                ...state,
                cart: [...state.cart, {...action.payload}],
            }
        default:
            return state;
    }

};

export default shopReducer;