import React from 'react';

import {Field} from 'redux-form';
import RFSwitch from '../ReduxFormComponent/RFSwitch';

const Switch = props => {
    const {name, disabled} = props;
    return <Field name = {name} disabled = {disabled} component = {RFSwitch} />
}

export default Switch;