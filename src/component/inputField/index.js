import React from 'react';
import { Field } from 'redux-form';
import RFTextnput from '../ReduxFormComponent/RFTextInput';
import RFDropdown from '../ReduxFormComponent/RFDropdown';


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

