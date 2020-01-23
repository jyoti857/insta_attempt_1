import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Feeds extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                    Feeds 
                </Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 80,
        alignItems: 'center',
        justifyContent: "center"
    }
})


export default Feeds;