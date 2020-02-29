import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Field, Fields } from 'redux-form';
import RFImageHolder from '../ReduxFormComponent/RFImageHolder';
import { IconButton } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro'
import { Colors } from 'react-native/Libraries/NewAppScreen';


const ImageHolder = props => {
    
    const {fields, onDeleteItem, viewImageHandler, canDelete} = props;

    const onDeleteTrigger = index => {
        new Promise(resolve => {
            fields.remove(index);
            resolve();
        }).then(onDeleteItem());
    }
    return fields.map((image, index) => (
        <View>
            <Field name = {image} component = {RFImageHolder}
                viewImage = {viewImageHandler}
            />
            <IconButton icon = {() => (
                <FontAwesome5 
                    name = "minus-circle"
                    color = "blue"
                    size = {20}
                    solid
                />
            )}
            onPress = {() => onDeleteTrigger(index)}
            disabled = {!canDelete}
            />
        </View>
    ))
}

export default ImageHolder;