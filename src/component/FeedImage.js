import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const FeedImage = props => {
    let heart = 'heart-o';
    return(
        <ScrollView>
            <Image source = {{uri: props.image}} 
                style = {{width: 400, height:300}}
            />
            <ScrollView style={{marginBottom: 13}}>
                <Icon name = {heart} size = {30}
                    onPress = {() => {heart? heart: 'heart'}}
                    style = {{marginTop: 20, marginLeft:10}}
                />
                <Icon name = 'comment-o' size = {30}
                    style = {{marginTop: 20, marginLeft: 60, position: "absolute"}}
                />
                <Icon name = 'paper-plane-o' size = {30}
                    style = {{marginTop: 20, marginLeft: 110, position: "absolute"}}
                />
            </ScrollView>

        </ScrollView>
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