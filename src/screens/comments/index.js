import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomTextInput from '../../component/CustomTextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

// class Comments extends React.Component{

//     constructor(props){
//         super(props);
//         this.textInput = React.createRef();
//     }
//     componentDidMount(){
//         this.textInput.current.focusTextInput();
//     }
//     render(){
//     return(
//         <View>
//             <Text>Comments screen</Text>
//             <CustomTextInput ref = {this.textInput}/>
//         </View>
//     )
//     }
// }

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.fieldOne = React.createRef();
        this.state = {
            comment: '', 
            commentsArr : []
        };
        // this.fieldOne.current.focus();
    }
    componentDidMount(){
        const textInput = this.fieldOne.current;
        textInput.focus();
    }
    render(){
        return(
            <View>
                <Text>{this.state.comment}</Text>
                <TextInput  
                    placeholder = 'post your comment'
                    autoCapitalize = 'words'
                    autoCorrect = {false}
                    autoFocus = {false}
                    keyboardType = 'default'
                    value = {this.state.comment}
                    ref = {this.fieldOne}
                    onChangeText = {text => this.setState({comment: text})}    
                />
                {/* <TouchableOpacity onPress = {() => {
                    const textInput = this.fieldOne.current;
                    textInput.focus();
                }}>
                   <Text>comment it</Text> 
                </TouchableOpacity> */}
            </View>
        )
    }
}

export default Comments;