import * as actionTypes from './ShoppingTypes';

const INITIAL_STATE = {
    products: [], //id: 1, type, title, price, image
    cart: [],
    currentItem: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CARD:
            return {}
        case actionTypes.CLEAR_CARD:
            return {}
        default:
            return state;
    }
};

export default shopReducer;