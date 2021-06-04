import Api from "../../api/api.js"

export const LOAD_DATA_LOADING = 'REDUX_THUNK_LOAD_DATA_LOADING';
export const LOAD_DATA_SUCCESS = 'REDUX_THUNK_LOAD_DATA_SUCCESS';
export const LOAD_DATA_ERROR = 'REDUX_THUNK_LOAD_DATA_ERROR';

export const loadProductData = () => dispatch => {
    dispatch({type: LOAD_DATA_LOADING});

    Api.getData()
        .then(response => response.json())
        .then(
            data => dispatch({type: LOAD_DATA_SUCCESS, data}),
            error => dispatch({
                type: LOAD_DATA_ERROR, error: error.message || 'Error with getting data for menu. ' +
                    'Make sure that json-server is running on a correct port'
            })
        )
};