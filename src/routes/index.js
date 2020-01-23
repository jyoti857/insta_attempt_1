import { createStatckNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
const appNavigator = createStackNavigator({
    Feeds:{
        screen: "Feeds"
    }
});


export default createAppContainer(appNavigator);

