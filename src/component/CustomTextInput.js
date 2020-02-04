import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';


class CustomTextInput extends React.Component {
    constructor(props){
        super(props);
        // create  a ref to store the textInput DOM element 
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput(){
        // explicitly focus the text input using the raw DOM API
        // Note: we are accessing "current" to get the DOM node 
        this.textInput.current.focus();
    }
    render(){
        // tell React that we want to associate the <input> ref
        // with the 'textInput' that we created in the constructor 
        return(
            <View>
                <TextInput  
                    ref = {this.textInput}
                    autoFocus = {true}
                    keyboardType = 'default'
                />
                <Button  title = 'Submit' 
                    value  = "Focus the Text input"
                    onClick = {this.focusTextInput}
                />
            </View>
        )
    }
}

export default CustomTextInput;