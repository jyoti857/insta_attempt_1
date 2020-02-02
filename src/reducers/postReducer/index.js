import { FETCH_POST, CLEAR_POST } from "../../constants";



const initialState = {
    name: '',
    posts:[]
}
const postReducer = (state = initialState, action) => {

    switch(action.type){

        case FETCH_POST:{
            return {
                ...state,
                posts: [...state.posts, action.payload] 
            }
        }
        case CLEAR_POST :{
            return{
                ...state, 
                posts: []
            }
        }
        default: return state;
    }
}

export default postReducer;