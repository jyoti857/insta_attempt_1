import React from 'react';
import { Field } from 'redux-form';
import RFMultiselector from '../ReduxFormComponent/RFMultiselect';


const Dropdown = props =>{
    const {label, items, name, required, searchText} = props;

    return(
        <Field
            label = {label}
            items = {items}
            name = {name}
            searchText = {searchText}
            component = {RFMultiselector}
            required = {required}
        />
    );
};

export default Dropdown;