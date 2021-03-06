import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {fonts} from '../../../fonts';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux';
import { loginSuccessAction } from '../../actions/loginSuccessAction';

const Login = props => {
    const [username, setUsername]  = useState('');
	const [password, setPassword] = useState('');
	const [errorLogin, setErrorLogin] = useState('');

	console.log("props -->", props);
	
	const handleLogin = () => {
		auth().signInWithEmailAndPassword(username, password)
			.then(() => {
				props.navigation.navigate('Feeds');
				props.loginAction();
				setUsername('');
				setPassword('');
				setErrorLogin('');
			})
			.catch(err => {
				setErrorLogin("invalid Username and password")
				console.log('from login screen -->', err);
			});
	}
    return (
			<View>
				<View style = {{
					// flexDirection: 'column', //default
					// flex: 1,
					// borderWidth: 2,
					// borderColor: 'red',
					margin: 50,
					height: 500,
					width: 350,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'white'
				}}>
				
				<Text style = {styles.insta}>Instagram</Text>
						<TextInput 
								style = {{height: 60, 
									width: 340,
								borderWidth: 2,
								paddingLeft: 10,
								fontSize: 20,
								marginBottom: 20 }}
                onChangeText = {userName => setUsername(userName)}
								value = {username}
								placeholder = 'Username'
								placeholderTextColor = 'grey'
            />
						<TextInput 
							style = {{height: 60, width: 340,
							borderWidth: 2, paddingLeft:10,
							fontSize: 20}}
                onChangeText = {password => setPassword(password)}
								value = {password}
								placeholder = 'Password'
								placeholderTextColor = 'grey'
            />
						{/* <Button title = 'Login' style = {{
							// height: 20, 
							// width: 200,
							color: 'green',
							// borderColor: 'green',
							// borderWidth: 2
						}} /> */}

				<Button onPress  = {handleLogin}>Login</Button>
				<Text
					style = {{color: 'red', fontSize: 20}}
				>{errorLogin}</Text>
				{/* <Icon name='heart-o' size = {30} color  = '#000' /> */}
        </View>
			</View>
    )
}
const styles = StyleSheet.create({
	insta: {
		fontSize: 60,
		fontFamily: fonts.DancingScriptBold,
		marginBottom: 40
	},
});

const mapStateToProps = state => {
	return {
		userName: state.loginReducer.userName,
		password: state.loginReducer.password,
		errorMessage: state.loginReducer.errorMessage,
	}
}

const mapDispatchToProps = dispatch => ({
	loginAction : () => dispatch(loginSuccessAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);