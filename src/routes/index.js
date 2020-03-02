import React, { useState, useEffect } from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro';
import AsyncStorage from '@react-native-community/async-storage';
import {isTablet} from 'react-native-device-detection';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/login';
import Feeds from '../screens/feeds';
import { View } from 'react-native';
import { setNavigator } from '../navigationRef';
import Comments from '../screens/comments';
import RFScreen from '../screens/RFScreen';
import MobileDrawerContent from './MobileDrawerContent';
import LoginStack from './Login';
// import { createBottomTabNavigator } from 'react-navigation-tabs';



const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const ModuleIcon = props => {
    const {name, iProps} = props;
    return (
        <FontAwesome5 
            name = {name}
            size = {18}
            color = {iProps.color}
            solid = {iProps.focued}
        />
    )
}
// const AppRouter = () =>{
//     const {roles, setRoles}  = useState([]);
//     useEffect(() => {
//         const bootStrapAsync = async () =>{
//             let token;
//             try{
//                 token = await AsyncStorage.getItem("@appusertoken");
//                 const decoded = jwt(token);
//                 setRoles(decoded.role);
//             }catch(err){
//                 // restoring token failed 
//             }
//         };
//         bootStrapAsync();
//     }, []);
//     return <NavigationContainer>
//     <Drawer.Navigator 
//             initialRouteName = "Login"
//             drawerContentOptions = {{
//                 activeTintColor : "#FFF",
//                 inactiveTintColor : "#939AA5",
//                 activeBackgroundColor : "#172b4d",
//                 itemStyle: {
//                     flexDirection: 'row',
//                     marginVertical: 5, 
//                     marginHorizontal: 6,
//                 },
//                 labelStyle:{
//                     fontSize: 16, 
//                 },
//             }}
//             drawerContent = {dProps => <MobileDrawerContent {...dProps}/>}
//         >
//             <Drawer.Screen name = 'Dashboard' 
//                 options = {{
//                     drawerLabel : 'Dashboard',
//                     drawerIcon: iProps => <ModuleIcon name = 'login' iProps ={iProps} />
//                 }}
//             >
//                 {() => <LoginStack />}
//             </Drawer.Screen>
//         </Drawer.Navigator>
//      </NavigationContainer>
// }

const AppRouter = createStackNavigator({
    Login: {screen : Login},
    RF:{screen: RFScreen},
    Feeds:{
        screen: Feeds,
    },
    Comments: {
        screen : Comments
    }
});


// const AppNavigator = <NavigationContainer>
//     {createAppContainer(AppRouter)}
//     </NavigationContainer>
// export default AppNavigator;
const AppNavigator = createAppContainer(AppRouter);
export default () => (
    <View style = {{flex:1}}>
        {/* <NavigationContainer> */}
        <AppNavigator ref = {navigator => setNavigator(navigator)}/>
        {/* </NavigationContainer> */}
    </View>
);