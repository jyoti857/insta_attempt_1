import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {Button, Avatar} from 'react-native-paper';
import CustomTextInput from '../../component/CustomTextInput';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {reduxForm, Field} from 'redux-form';

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
            commentsArr : [],
            commentLike: false,
            postTime : 0,
						diff: 0,
						rValues:{},
        };
        // this.fieldOne.current.focus();
    }
    componentDidMount(){
        const textInput = this.fieldOne.current;
        textInput.focus();
    }
    handlePost = () => {
        // this.setState({commentsArr:this.state.commentsArr.concat(this.state.comment)});
        this.setState({
                commentsArr:[...this.state.commentsArr, this.state.comment ], 
                comment: "",
                postTime: new Date().getSeconds(),

            });
        // console.log("from handle post -==-=->", this.state.commentsArr, "@@)*)$@", this.state.comment)
    }
    handleCommentLike = () =>{
        this.setState({commentLike: !this.state.commentLike})
    }
    // handleTimePost = () => {
    //     this.postTime = new Date().getTime();
    //     console.log("from Comments page time ---> ", this.postTime)
    // }
    displayTimePost  = () => {
        const currentTime = new Date().getSeconds();
        const diff  = currentTime-this.state.postTime;
        // if(diff < 1){
        //      <Text>now</Text>
        // }
        // this.setState({diff});
        return <Text>{diff}s</Text>
    }
    componentDidUpdate(){
        setTimeout(() => this.displayTimePost(), 2000);
		}
		// for redux form 
		submit = values =>{
			console.log("Submitting values ----> ", values);
			this.setState({rValues:values});
		}
    render(){
        return(
            <View onSubmit = {this.props.handleSubmit(this.submit)}>
							<TextInput style = {{borderColor: 'black',
									borderWidth: 1,
									height: 37,
									width: 250
							}}/>
							<Field name = 'FirstnameinComment' component  = {TextInput}/>
							<TouchableOpacity onSubmit = {this.props.handleSubmit(this.submit)}><Text
										style = {{backgroundColor: 'blue',
										color: 'white',
										height: 30,
										lineHeight: 30,
										marginTop: 10,
										textAlign: 'center',
										width: 250}}
								> Submit</Text></TouchableOpacity>
                <ScrollView contentContainerStyle = {{zIndex: -1}}>
                    {this.state.commentsArr.map(comment=>{
                        return (
                            <View>
                                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}}>
                                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                                    <Avatar.Image 
                                    size = {40} source = {require('../../../assets/sofi1.jpg')}
                                    style = {{margin:10}}
                                    />
                                    <Text style={{margin: 3, fontSize:20}}>{comment}</Text>
                                </View>
                                <Icon name = {this.state.commentLike ? 'heart': 'heart-o'} size={20}
                                    onPress = {this.handleCommentLike}
                                    style={{marginRight: 20}}
                                />
                                </View>
                                {/* <Text>{setTimeout(this.displayTimePost(), 2000)}</Text> */}
																<View style = {{flexDirection: 'row', paddingLeft: 20}}>
																	<Text style = {{fontSize: 20}}>{this.displayTimePost()}</Text>
																	<Text style = {{marginLeft: 40, fontSize: 20, color: "grey" }}>Reply</Text>
																</View>
                            </View>
                        )
                    })}
                </ScrollView>
                <KeyboardAvoidingView style ={{marginTop: 300, flexDirection: "row", 
                justifyContent: "space-between", position: "absolute"}}>
                    <TextInput  
											placeholder = 'post your comment'
											// autoCapitalize = 'words'
											autoCorrect = {false}
											autoFocus = {false}
											// keyboardType = 'default'
											value = {this.state.comment}
											ref = {this.fieldOne}
											style={{fontSize:20, paddingLeft:10}}
											onChangeText = {text => this.setState({comment: text})}    
                    />
                    <Button onPress = {this.handlePost} style ={{position: "relative", marginRight: 90}}>Post</Button>
                </KeyboardAvoidingView>
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

// export default Comments;

export default reduxForm({
	form: "dksl"
})(Comments);