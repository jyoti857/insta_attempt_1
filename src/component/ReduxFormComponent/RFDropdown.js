import React from 'react';
// import DateTimePicker from 'react-native-modal-datetime-picker';
import {Dropdown as MaterialDropdown} from 'react-native-material-dropdown';

class RFDropdown extends React.Component{

    onChangeHandler = event => {
        const {input, onChangeTrigger} = this.props;
        input.onChange(event);
        if(onChangeTrigger) onChangeTrigger();
    }
    
    render(){
        let hasError = false;
        const {input, label, data, meta:{touched, error}, 
            ...inputProps
        } = this.props;
        if(touched && error) {hasError = true;}
        return(
            <MaterialDropdown 
                label = {label || "dropJY"}
                data = {data}

            />
        )
    }
}

export default RFDropdown;