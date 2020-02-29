import React from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { View, Text } from 'react-native';
import {Button} from 'react-native-paper';

class RFDatePicker extends React.Component{

    state = {
        visibility: false,
        chosenDate: ""
    }

    showDateTimePicker = () => {
        this.setState({visibility:true});
    }
    
    hideDateTimePicker = dateTime =>{
        // this.props.onCancel();

        this.setState({visibility: false, 
            chosenDate: moment(dateTime).format("MMMM, Do YYYY HH:mm"),    
        });
    }

    handleDateSelected = event =>{
        // this.setState({visibility: true})
        const {input} = this.props;
        input.onChange(event);
        // this.props.onCancel();
        this.hideDateTimePicker();
    }

    render(){
        const {visible, input, mode, 
            meta: {touched, error}, ...inputProps} = this.props;
            console.log("input date picker value --->", typeof input.value, Object.keys(input.value))
        return(
            <View>
                {/* {input.value.map(value => <Text>{value}</Text>)} */}
                
                <Button onPress = {this.showDateTimePicker}>Get Date</Button>
                <DateTimePicker 
                    {...inputProps}
                    isVisible = {this.state.visibility}
                    onConfirm = {this.handleDateSelected}
                    onCancel = {this.hideDateTimePicker}
                    mode = {mode || 'datetime'}
                    date = {input.value || new Date(moment())}
                />
            </View>
        )
    }
}
export default RFDatePicker;