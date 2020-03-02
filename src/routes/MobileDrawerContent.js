import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Avatar, withTheme, Subheading, Divider, Text, Title} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {Row, Col}  from 'react-native-easy-grid';
import {DrawerItemList} from '@react-navigation/drawer';
import { ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Pro';

const MobileDrawer = props => {

    // const {signout} = useContext(AuthContext);
    // const {colors} = props.theme;
    const [displayName, setDisplayName] = useState(null);
    const [avatar, setAvatar] = useState('https://img.icons8.com/pastel-glyph/2x/person-male.png');
    const [email, setEmail] = useState(null);

    const getUserData = async () => {
        const userData = await AsyncStorage.getItem("@userdata");
        if(userData && displayName === null){
            const parsed = JSON.parse(userData);
            setDisplayName(parsed.DisplayName);
            setEmail(parsed.Email);
            setAvatar(parsed.AvatarUrl);
        }
    };
    useEffect(() => {
        getUserData();
    });
    const _signoutAsync = async() => {
        await AsyncStorage.clear()
        // signout(); // will be called once context is implemented
    }
    return(
        <SafeAreaProvider>
            <SafeAreaView forceInset = {{top: 'always', horizontal: 'always'}}>
                <Row>
                    <Col>
                        <Avatar.Image style = {{backgroundColor: 'white'}}
                        source = {{uri:avatar}}/>
                    </Col>
                    <Col>
                        <Title style = {{color: 'white'}}>{displayName}</Title>
                        <Text style = {{color: 'white'}}>{email}</Text>
                    </Col>
                </Row>
                <Divider />
                <View>
                    <ScrollView>
                        <DrawerItemList {...props} />
                    </ScrollView>
                    <View>
                        <Divider />
                        <Row onPress = {_signoutAsync}>
                            <Col style = {{width: 'auto'}}>
                                <FontAwesome5 name = 'sign-out'
                                    size = {25}
                                    color = 'blue'
                                    solid
                                />
                            </Col>
                            <Col style = {{marginLeft: 20}}>
                                <Subheading>Sign out</Subheading>
                            </Col>
                        </Row>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

// const withConnect = connect()

export default withTheme(MobileDrawer);
// export default MobileDrawer;