import React from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

class RFDatePicker extends React.Component{

    state = {
        visibility: true,
    }

    
    hideDateTimePicker = () =>{
        // this.props.onCancel();

        this.setState({visibility: false})
    }
    handleDateSelected = event =>{
        const {input} = this.props;
        input.onChange(event);
        // this.props.onCancel();
        this.hideDateTimePicker();
    }

    render(){
        const {visible, input, mode, 
            meta: {touched, error}, ...inputProps} = this.props;
        return(
            <DateTimePicker 
                {...inputProps}
                isVisible = {this.state.visibility}
                onConfirm = {this.handleDateSelected}
                onCancel = {this.hideDateTimePicker}
                mode = {mode || 'date'}
                date = {input.value || new Date(moment())}
            />
        )
    }
}
export default RFDatePicker;