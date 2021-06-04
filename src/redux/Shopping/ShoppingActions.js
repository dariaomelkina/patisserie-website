import * as actionTypes from './ShoppingTypes';


export const addToCard = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CARD,
        payload: {
            id: itemID
        }
    }
};
