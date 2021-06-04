import {combineReducers} from 'redux';
import ShopReducer from './Shopping/ShoppingReducer';


const rootReducer = combineReducers({
    shop: ShopReducer,
});

export default rootReducer;