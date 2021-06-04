import * as actionTypes from './ShoppingTypes';


export const addToCard = (item) => {
    return {
        type: actionTypes.ADD_TO_CARD,
        payload: item
    }
};
