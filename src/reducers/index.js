import { combineReducers } from 'redux';
import postReducer from './postReducer';
import loginReducer from './loginReducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
    postReducer,
    loginReducer,
    form: formReducer,

});


export default rootReducer;