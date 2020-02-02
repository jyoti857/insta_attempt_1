import firebase from '@react-native-firebase/app';
import { FETCH_POST } from '../constants';


const fetchPostAction = () => {
    const {currentUser} = firebase.auth();
    const posts = [];
    return dispatch => {
        firebase.database().ref(`users/${currentUser.uid}/posts`)
            .on('value', snapshot => {
                const post = snapshot.val() ? 
                Object.values(snapshot.val()) : [];

                dispatch({
                    type: FETCH_POST,
                    payload: post 
                });
            });
    }
}

export {fetchPostAction};