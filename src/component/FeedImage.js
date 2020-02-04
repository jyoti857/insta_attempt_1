import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../navigationRef';
import {Avatar} from 'react-native-paper';


const FeedImage = props => {
    let count = 0;
    const [like, setLike] = useState(false);
    const handleLike = () =>{
        setLike(!like)
    }
    const handleComments = () => {
        navigate('Comments');
    }
    
    return(
        <View>
            <ScrollView>
                <View style = {{flexDirection: "row", alignItems: 'center'}}>
                    <Avatar.Image size = {60} source = {require('../../assets/sofi1.jpg')}
                        style = {{margin:10, borderWidth:4, borderColor: 'pink'}}
                    />
                    <Text style = {{fontSize: 20, marginLeft: 10}}>Sofia_braverly</Text>
                </View>
                <Image source = {{uri: props.image}} 
                    style = {{width: 400, height:300}}
                />
                <View style={{marginBottom: 13}}>
                    <Icon name = {like ? 'heart': 'heart-o'} size = {30}
                        onPress = {handleLike}
                        style = {{marginTop: 20, marginLeft:10}}
                    />
                    <Icon name = 'comment-o' size = {30}
                        style = {{marginTop: 20, marginLeft: 60, position: "absolute"}}
                        onPress = {handleComments}
                    />
                    <Icon name = 'paper-plane-o' size = {30}
                        style = {{marginTop: 20, marginLeft: 110, position: "absolute"}}
                    />
                </View>
                <Text style = {{fontSize: 20, margin: 10}}>{like ? `${++count} like` : ''}</Text>

            </ScrollView>
        </View>
    )
}

export default FeedImage;


// https://image.shutterstock.com/image-photo/beautiful-dancer-girl-model-sits-260nw-1632072949.jpg
// https://image.shutterstock.com/image-photo/ribbon-on-white-women-underwear-260nw-1631825401.jpg
// https://image.shutterstock.com/image-photo/female-stockings-isolated-on-white-600w-1632317038.jpg
// https://image.shutterstock.com/image-photo/large-industrial-equipment-heating-pipe-260nw-1632532333.jpg
// https://image.shutterstock.com/image-photo/welders-connect-building-structure-under-260nw-1632451408.jpg
// https://image.shutterstock.com/image-photo/red-cat-next-toy-cart-260nw-1632423574.jpg
// https://image.shutterstock.com/image-photo/crested-ibis-flies-foraging-habitat-260nw-1632347386.jpg