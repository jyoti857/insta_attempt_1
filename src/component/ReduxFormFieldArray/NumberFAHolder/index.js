import React from 'react';
import { Field } from 'redux-form';
import RFNumberInput from '../../ReduxFormComponent/RFNumberInput';

const NumberFAHolder = props => {
    const {fields, fieldLables} = props;
    return fields.map((field, index) => (
        <Field 
            name = {field}
            key = {`key ${index}`}
            label = {fieldLables[index].name}
            required = {fieldLables[index].required}
            component = {RFNumberInput}
        />
    ))
}

export default NumberFAHolder;