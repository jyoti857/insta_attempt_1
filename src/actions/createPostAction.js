

import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import { CREATE_POST } from '../constants';

const createPostAction = (image) => {
    const id = Math.floor(Math.random() * 999);
    const {currentUser} = firebase.auth();
    const name = currentUser.email.split('@')[0];
    return dispatch => {
        firebase.database().ref(`users/${currentUser.uid}/posts`)
            .push({id, name, image})
            .then(() => {
                // dispatch({
                //     type: CREATE_POST, 
                //     payload: {id, name, image}
                // })
            })
    }
} 
export {createPostAction};