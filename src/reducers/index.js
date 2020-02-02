import { combineReducers } from 'redux';
import postReducer from './postReducer';
import loginReducer from './loginReducer';


const rootReducer = combineReducers({
    postReducer,
    loginReducer
});


export default rootReducer;