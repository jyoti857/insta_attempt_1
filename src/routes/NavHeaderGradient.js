import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';
import { LINEAR_START, LINEAR_END } from '../utils/valueConstants';
import * as colors from '../utils/colorConstants';

const GradientBackground = () =>{
    return(
        <LinearGradient
            start = {LINEAR_START}
            end = {LINEAR_END}
            style = {{flex:1}}
            color = {colors.DEAFULT_HEADER}
        >
            <StatusBar 
                barStyle = 'light-content'
                translucent
                backgroundColor = "transparent"
            />
            
        </LinearGradient>
    )
};

export default GradientBackground;