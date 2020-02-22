import React from 'react';
import {reduxForm, Field} from 'redux-form';
import RFTextnput from '../../component/ReduxFormComponent/RFTextInput';
import { TextInput } from '../../component/inputField';
import { View, Text, TouchableOpacity } from 'react-native';


const RFScreen = props =>{
    const submit = values => {
        // alert("this is values", values);
        console.log("this is values  --> ",values)
    }
    return(
        <View>
            <TextInput name ="first_name" label="First name"/>
            <TextInput name ="last_name" label="Last name"/>
            <TextInput name ="Address" label="Address"/>
            <TouchableOpacity onPress = {props.handleSubmit(submit)}>
                <Text>Submit</Text>
                </TouchableOpacity>
        </View>

    )
}

export default reduxForm({
    form: "RFScreen"
})(RFScreen);