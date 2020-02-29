import React from 'react';
import { Field } from 'redux-form';
import RFTextnput from '../ReduxFormComponent/RFTextInput';
import RFDropdown from '../ReduxFormComponent/RFDropdown';
import RFNumberInput from '../ReduxFormComponent/RFNumberInput';



export const NumberInput  = props => {
    const {
        label, name, required, helperText, 
        multiline, disabled, defaultValue,
        onChangeTrigger
    } = props;
    return(
        <Field 
            label = {label}
            name = {name}
            component = {RFNumberInput}
            required = {required}
            helperText = {helperText}
            multiline = {multiline}
            disabled = {disabled}
            defaultValue = {defaultValue}
            onChangeTrigger = {onChangeTrigger}
        />
    )
}
export const TextInput = ({
    name,
    label,
}) => {
    return(
        <Field 
            name = {name}
            component= {RFTextnput}
            label={label}
        />
    )
}

export const DatePicker  = () => {
    return(
        <Field 
            // name = {name}
            component = {RFDropdown}
            // label = {label}
        />
    )
}

