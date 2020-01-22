import React from 'react';
import {View, Text, Image} from 'react-native';
import logo from './insta1.png';

const Splash = () => {
    return (
        <View>
            <Image source = {require('./insta1.png')} 
                        style = {{height: 300, width: 300, 
                        alignSelf: 'center', 
                        marginTop: 222}}/>
                <Text style = {{marginLeft: 180, color: 'black', 
                        marginTop: 300}}>@jyoti.inc</Text>
        </View>
    )
}

export default Splash;