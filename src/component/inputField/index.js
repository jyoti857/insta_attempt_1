import React from 'react';
import { Field } from 'redux-form';
import RFTextnput from '../ReduxFormComponent/RFTextInput';


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
