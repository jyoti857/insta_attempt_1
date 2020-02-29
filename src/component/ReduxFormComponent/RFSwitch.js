import React from 'react';
import {Switch, withTheme} from 'react-native-paper';
import {compose} from 'redux';

const RFSwitch = props => {
    const {input, disabled} = props;
    return (
        <Switch  
            value = {input.value}
            {...input}
            style = {{transform : [{scaleX: 0.8}, {scaleY: 0.8}]}}
            onValueChange =  {input.onChange}
            color = {Colors.Primary}
            disabled  = {disabled}
        /> 
            
        
    )
}
export default compose(withTheme)(RFSwitch);
