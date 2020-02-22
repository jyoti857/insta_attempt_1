import React from 'react';
import { Field } from 'redux-form';
import RFDropdown from '../ReduxFormComponent/RFDropdown';

const Dropdown = props => {
    const {name, label, onChangeTrigger, data } = props;
    return(
        <Field 
            name = {name}
            label  = {label}
            data = {data}
            component = {RFDropdown}
            onChangeTrigger = {onChangeTrigger}
        />
    )
}

export default Dropdown;