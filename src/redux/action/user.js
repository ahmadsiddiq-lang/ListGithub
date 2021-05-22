import axios from 'axios';
import { BSE_URL } from '../../config/URL';

export const GET_USER = 'GET_USER';

export const hitUser = (username) => {
    return async (dispatch) => {
        await axios.get(BSE_URL + username)
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_USER,
                    data: response.data,
                });
            }).catch(err => {
                console.log(err.response);
            });
    };
};
