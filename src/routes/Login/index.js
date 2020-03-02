import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import login from '../../screens/login';
import GradientBackground from '../NavHeaderGradient';


const Login = createStackNavigator();


const LoginStack = () =>(
    <Login.Navigator
        screenOptions= {{headerTintColor: 'red',}}
        headerMode="screen"
    >
        <Login.Screen 
            name = "Login screen"
            component = {login}
            options = {{
                title : "Login jy",
                headerTitleStyle :{fontSize:20},
                headerBackground : () => <GradientBackground />
                
            }}
        />
    </Login.Navigator>
);

export default LoginStack;