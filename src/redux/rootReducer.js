import {combineReducers} from 'redux';
import ShopReducer from './Shopping/ShoppingReducer';
import {default as reduxThunk} from "./thunk/reducer"


const rootReducer = combineReducers({
    shop: ShopReducer,
    reduxThunk,
});

export default rootReducer;