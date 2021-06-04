import {LOAD_DATA_ERROR, LOAD_DATA_LOADING, LOAD_DATA_SUCCESS} from "./actions";

const initialState = {
    data: [],
    loading: false,
    error: ''
};

// based on example from
// https://github.com/ValeraT1982/react-data-load/blob/master/data-load-test-app/src/redux-thunk/reducer.js
export default function thunkReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_DATA_LOADING: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case LOAD_DATA_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}