import React from 'react';
import {View, Text} from 'react-native';
import { RadioButton, TouchableRipple, Paragraph } from 'react-native-paper';
import {Row, Col} from 'react-native-easy-grid';

export default class RFRadioButton extends React.Component {
    touchableClickChange = value => {
        this.props.input.onChange(value);
    } 

    render() {
        const {
            input,
            required, 
            data, 
            defaultValue,
            meta:{touched, error},
            ...inputProps
        } = this.props;
        
        let hasError = false;
        let hasField = false;
        if(required && touched && error){
            hasError = true;
            if(typeof error === 'string'){
                errorField = (<Text>{`${error}`}</Text>)
            }
        } 
        return (
            <View>
                <RadioButton.Group
                    value = {input.value || defaultValue}
                    onValueChange = {input.onChange}
                    {...inputProps}
                >
                    <Row>
                        {data.map(radio => (
                            <Col key = {radio.key}>
                                <TouchableRipple 
                                    onPress = {() => this.touchableClickChange(radio.value)}
                                    >
                                        <View>
                                            <Paragraph>{radio.label}</Paragraph>
                                            <RadioButton value = {radio.valie} />
                                        </View>
                                    </TouchableRipple>
                            </Col>
                        ))}
                    </Row>
                </RadioButton.Group>
            </View>
        )
    }
}

