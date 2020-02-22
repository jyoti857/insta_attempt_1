import React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const RFTextnput = props =>{

    const {value, label, input, onChangeTrigger,
        meta:{error, touched}
    } = props;
    const onChangeHandler = event =>{
        input.onChange(event);
        // if(onChangeTrigger) onChangeTrigger();
        console.log("this is from onChangeHandler", input.value);
        console.log("field values -->", value)
    }
    let hasError = false;
    if(touched && error){
        hasError = true;
    }
    return(
        <TextInput 
            value = {input.value} 
            onChange = {onChangeHandler}
            label = {label || "lLabel"}
            onBlur = {input.onBlur}
            onFocus = {input.onFocus}
            style = {[styles.inputContainer]}
            error = {hasError}
        />
            
    )
}
const styles = StyleSheet.create({
    inputContainer:{
        width: "90%",
        margin: 20,
    }
    
})

export default RFTextnput;