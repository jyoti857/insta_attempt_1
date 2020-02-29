import React from 'react'
import {View} from 'react-native';
import { Field } from 'redux-form';
import RFRadioButton from '../ReduxFormComponent/RFRadioButton';

const  RadioButtonGroup =props=> {
    const {data, name, required, defaultValue} = props;
    return (
        <Field
            name = {name}
            component = {RFRadioButton}
            defaultValue = {defaultValue}
            required = {required}
            data = {data}
        />
    )
}

export default RadioButtonGroup;
