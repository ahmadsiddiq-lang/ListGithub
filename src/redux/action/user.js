import axios from 'axios';
import { BSE_URL } from '../../config/URL';

export const hitUser = (username) => {
    return async (dispatch) => {
        await axios.get(BSE_URL + username)
            .then(response => {
                console.log(response);
            }).catch(err => {
                console.log(err.response);
            });
    };
};
