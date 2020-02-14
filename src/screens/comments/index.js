import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {Button} from 'react-native-paper';
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
    handlePost = () => {
        // this.setState({commentsArr:this.state.commentsArr.concat(this.state.comment)});
        this.setState({commentsArr:[...this.state.commentsArr, this.state.comment ], comment: ""});
        console.log("from handle post -==-=->", this.state.commentsArr, "@@)*)$@", this.state.comment)
    }
    render(){
        return(
            <View>
                {this.state.commentsArr.map(comment=>{
                    return <Text style={{margin: 3, fontSize:20}}>{comment}</Text>
                })}
                <View style ={{marginTop: 300, flexDirection: "row", 
                justifyContent: "space-between"}}>
                    <TextInput  
                        placeholder = 'post your comment'
                        autoCapitalize = 'words'
                        autoCorrect = {false}
                        autoFocus = {false}
                        // keyboardType = 'default'
                        value = {this.state.comment}
                        ref = {this.fieldOne}
                        style={{fontSize:30, marginLeft:10}}
                        onChangeText = {text => this.setState({comment: text})}    
                    />
                    <Button onPress = {this.handlePost} style ={{position: "relative", marginRight: 20}}>Post</Button>
                </View>
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