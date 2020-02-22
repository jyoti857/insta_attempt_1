import React from 'react';
import {reduxForm, Field} from 'redux-form';
import RFTextnput from '../../component/ReduxFormComponent/RFTextInput';
import { TextInput } from '../../component/inputField';
import { View, Text, TouchableOpacity } from 'react-native';
import Dropdown from '../../component/dropdown';
import DatePicker from '../../component/datePicker';


const RFScreen = props =>{
    const submit = values => {
        // alert("this is values", values);
        console.log("this is values  --> ",values)
    }

    const data = [
        {
             value  : "v_bang",
        },
        {value : "v_ndjskd"},

    ]
    return(
        <View>
            <TextInput name ="first_name" label="First name"/>
            <TextInput name ="last_name" label="Last name"/>
            <TextInput name ="Address" label="Address"/>
            <DatePicker name = 'Select a date' />
            <Dropdown name = 'City' label = 'City' data = {data}/>
            <TouchableOpacity onPress = {props.handleSubmit(submit)}>
                <Text>Submit</Text>
                </TouchableOpacity>
        </View>

    )
}

export default reduxForm({
    form: "RFScreen"
})(RFScreen);