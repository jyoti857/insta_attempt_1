import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const loaderImage = require('insta_1/src/assets/images/imageloader.png');
const pdfImage = require("insta_1/src/assets/images/pdficon.png");

const RFImageHolder = props => {
    
    const isUrl = s =>{
        const regexp = /(ftp|http|https)/;
        return regexp.test(s);
    }
    if(input.value.includes('.pdf')){
        return(
            <View style = {{
                alignItems : 'center',
                justifyContent:"center",
                flex:1,
                widt:90,
                height:90
            }}>
                <Image 
                    resizeMode = 'cover'
                    style = {styles.imageContainerPdf}
                    defaultSource = {pdfImage}
                />
            </View>
        )
    }
    return(
        <View>
            <TouchableRipple>
                <Image 
                    resizeMode = 'cover'
                    source = {{
                        isStatic: !isUrl(input.value),
                        uri: isUrl(input.value) 
                        ? input.value
                        :`data:image/jpeg;base64,${input.value}`
                    }}
                    style = {styles.imageContainer}
                    defaultSource = {loaderImage}
                /> 
            </TouchableRipple>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainerPdf :{
        width:50,
        height:50, 
        borderRadius: 10
    }, 
    imageContainer :{
        height: 100,
        width: 100, 
        margin:5,
        borderRadius:10
    }
});

export default RFImageHolder;