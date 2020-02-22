import React from 'react';
import { Field } from 'redux-form';
import RFDatePicker from '../ReduxFormComponent/RFDatePicker';


const DatePicker = props =>{
    const {name, isVisible, mode, onCancel, onConfirm} = props;
    return (
        <Field 
            name  = {name}
            component = {RFDatePicker}
            visible 
            mode = {mode}
            onCancel = {onCancel}
            onConfirm = {onConfirm}
        />
    )
}

export default DatePicker;