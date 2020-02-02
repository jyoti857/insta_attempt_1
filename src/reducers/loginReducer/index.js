import { LOGIN_SUCCESS } from "../../constants";

const initialState = {
    userName : '',
    password: '',
    errorMessage: ''
}

const loginReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGIN_SUCCESS: {
            return{
                ...state,
                userName: '',
                password: '',
                errorMessage: ''
            }
        }
        default: return state;
    }
}


export default loginReducer;