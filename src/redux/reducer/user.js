import { CLEAR, GET_REPO, GET_USER } from '../action/user';

const initialState = {
    dataUser: null,
    dataRepo: null,
};
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                dataUser: action.data,
            };
        case GET_REPO:
            return {
                ...state,
                dataRepo: action.data,
            };
        case CLEAR:
            return {
                ...state,
                dataUser: null,
                dataRepo: null,
            };

        default:
            return state;
    }
};

export default UserReducer;
