import axios from 'axios';
import { BSE_URL } from '../../config/URL';

export const GET_USER = 'GET_USER';
export const GET_REPO = 'GET_REPO';
export const CLEAR = 'CLEAR';

export const hitUser = (username, handleSuccess, handleError) => {
    return async (dispatch) => {
        await axios.get(BSE_URL + username)
            .then(response => {
                handleSuccess(response.data);
                dispatch({
                    type: GET_USER,
                    data: response.data,
                });
            }).catch(err => {
                console.log(err.response);
                handleError(err.response);
            });
    };
};

export const hitRepo = (username) => {
    return async (dispatch) => {
        await axios.get(BSE_URL + username + '/repos')
            .then(response => {
                dispatch({
                    type: GET_REPO,
                    data: response.data,
                });
            }).catch(err => {
                console.log(err.response);
            });
    };
};
export const clear = () => {
    return async (dispatch) => {
        dispatch({
            type: CLEAR,
        });
    };
};
