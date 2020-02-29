import React from 'react';
import { View } from 'react-native';
import { Field } from 'redux-form';
import RFImageHolder from '../../ReduxFormComponent/RFImageHolder';
import { IconButton } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro';

const ImageHolder = props => {

    const {fields, viewImageHandler, onDeleteItem} = props;
    const onDeleteTrigger = index => {
        new Promise(resolve => {
            fields.remove(index);
            resolve();
        }).then(onDeleteItem());
    };
    return fields.map((image, index) => (
        <View>
            <Field
                name = {image}
                component = {RFImageHolder}
                viewImage = {viewImageHandler}
            />
            <IconButton
                icon = {() => (
                    <FontAwesome5 
                        name = "minus-circle"
                        color = "red"
                        size = {20}
                        solid
                    />
                )}
                color = 'red'
                style = {{margin:20}}
                onPress = {() => onDeleteTrigger(index)}
            />
        </View>
    ))
}

export default ImageHolder;