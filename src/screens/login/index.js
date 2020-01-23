import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {fonts} from '../../../fonts';

const Login = props => {
    const [username, setUsername]  = useState('');
    const [password, setPassword] = useState('');
    return (
			<View style = {{flex:1, borderWidth:22}}>
				<View style = {{
					// flexDirection: 'column', //default
					// flex: 1,
					// borderWidth: 2,
					// borderColor: 'red',
					margin: 50,
					height: 500,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'white'
				}}>
				
				<Text style = {styles.insta}>Instagram</Text>
						<TextInput 
								style = {{height: 60, 
									width: 370,
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
							style = {{height: 60, width: 370,
							borderWidth: 2, paddingLeft:10,
							fontSize: 20}}
                onChangeText = {password => setPassword(password)}
								value = {password}
								placeholder = 'Password'
								placeholderTextColor = 'grey'
            />
						<Button title = 'Login' style = {{
							// height: 20, 
							// width: 200,
							color: 'green',
							// borderColor: 'green',
							// borderWidth: 2
						}} />
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
})

export default Login;