import { LOGIN_SUCCESS } from "../constants"

const loginSuccessAction = () => {
    return dispatch => dispatch({
        type: LOGIN_SUCCESS,
        // payload: {userName, password}
    });
};

export {loginSuccessAction};