import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/login';
import Feeds from '../screens/feeds';
import { View } from 'react-native';
import { setNavigator } from '../navigationRef';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
const appNavigator = createStackNavigator({
    Login: {screen : Login},
    Feeds:{
        screen: Feeds,
    },
});


const AppNavigator = createAppContainer(appNavigator);
// export default AppNavigator;

export default () => (
    <View style = {{flex:1}}>
        <AppNavigator ref = {navigator => setNavigator(navigator)}/>
    </View>
);

