/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Splash from './src/screens/splash';
import Login from './src/screens/login';
import Feeds from './src/screens/feeds';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import AppNavigator from './src/routes';
import {Provider} from 'react-redux';
import store from './store';



const App = () => {

  useEffect(()  => {
    const firebaseConfig = {
      apiKey: "AIzaSyDwjN2Jn2S3nBh5j8EFca6i9OeMbhmrJsE",
      authDomain: "insta-attempt-1.firebaseapp.com",
      databaseURL: "https://insta-attempt-1.firebaseio.com",
      projectId: "insta-attempt-1",
      storageBucket: "insta-attempt-1.appspot.com",
      messagingSenderId: "593700882940",
      appId: "1:593700882940:web:fc96eee32e036e9a214a79",
      measurementId: "G-NJJ0ZWMFC8"
    };
    firebase.initializeApp(firebaseConfig);
    console.log(firebase.app.length);
    // console.log("foef feof ", firebase.auth().currentUser.email)
    // console.log("app database --->", database.ref);

  })
  return(
    // <StatusBar barStyle  = 'dark-content'>
    //   <ScrollView>
    //     <Splash />
    //   </ScrollView>
    // </StatusBar>
    <Provider store = {store}>
      <View style = {{flex:1}}>
        {/* <Splash /> */}
        {/* <Login /> */}
        <AppNavigator />
        {/* <Feeds /> */}
      </View>
    </Provider>
  )
}

export default App;
