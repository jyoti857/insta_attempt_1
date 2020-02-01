/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Splash from './src/screens/splash';
import Login from './src/screens/login';
import Feeds from './src/screens/feeds';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();



const App = () => {
  return(
    // <StatusBar barStyle  = 'dark-content'>
    //   <ScrollView>
    //     <Splash />
    //   </ScrollView>
    // </StatusBar>
    <View>
      {/* <Splash /> */}
      <Login />
      {/* <Feeds /> */}
    </View>
  )
}

export default App;
