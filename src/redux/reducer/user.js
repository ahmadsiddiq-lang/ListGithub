import { GET_USER } from '../action/user';

const initialState = {
    dataUser: null,
};
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                dataUser: action.data,
            };

        default:
            return state;
    }
};

export default UserReducer;
