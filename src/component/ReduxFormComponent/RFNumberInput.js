import React from 'react';
import {View} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';

const RFNumberInput = props => {

    const {input, label, required, helperText, defaultValue, disabled, onChangeTrigger, 
            meta: {touched, error}, 
    } = props;

    let hasError = false;
    const onChangeHandler = event =>{
        input.onChange(event);
        if(onChageTrigger) onChangeTrigger(input.value); 
    };
    if(touched && error){
        hasError = true;
    }
    if(disabled && error){
        hasError = true;
    }
    return(
        <View>
            <TextInput 
                {...inputProps}
                onChange = {event => onChangeHandler(event)}
                value  = {input.value || defaultValue}
                label = {required ? `*${label}`: label}
                keyboardType = 'numeric'
                error = {hasError}
                style = {{margin : 20}}
                disabled = {disabled}
            />
            {touched && error (
                    <HelperText type = 'error' visible = {hasError}>
                        {helperText || error || `${label} is required`}
                    </HelperText>
                )}
        </View>

    )
}
export default RFNumberInput;