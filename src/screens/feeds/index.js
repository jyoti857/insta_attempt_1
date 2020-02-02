import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FeedImage from '../../component/FeedImage';
import {connect} from 'react-redux';
import {Button} from 'react-native-paper';
import { createPostAction } from '../../actions/createPostAction';
import { fetchPostAction } from '../../actions/fetchPostAction';
import { clearPostAction } from '../../actions/clearPostAction';
import postReducer from '../../reducers/postReducer';

class Feeds extends React.Component{

    componentDidMount(){
        this.props.fetchPosts();
        console.log("from feeds index --->", this.props.posts);
        this.props.posts.map(post => console.log(post[0].image))
    }
    
    render(){
        return(
            <View style = {styles.container}>
                <View style  = {{flexDirection: 'row'}}>
                    <Button onPress = {this.props.clearPosts}>Clear posts</Button>
                    <Button onPress = {this.props.fetchPosts}>Fetch posts</Button>
                </View>
                <Text>
                    Feeds   
                </Text>
                <ScrollView>
                    {
                        this.props.posts.map(post => {
                            return post.map(pos => {
                                return<FeedImage key = {pos.id} image = {pos.image} />
                            })
                        })
                    }
                </ScrollView>
                {/* <FeedImage image = 'https://wallpapercave.com/wp/wp2956715.jpg'/> */}
                {/* <Button onPress = {
                    () => this.props.imageToDatabase(
                        // imgArr[0]
                        //'https://image.shutterstock.com/image-photo/beautiful-dancer-girl-model-sits-260nw-1632072949.jpg'
                        // 'https://image.shutterstock.com/image-photo/beautiful-dancer-girl-model-sits-260nw-1632072949.jpg'
                        //'https://image.shutterstock.com/image-photo/ribbon-on-white-women-underwear-260nw-1631825401.jpg'
                        //'https://image.shutterstock.com/image-photo/female-stockings-isolated-on-white-600w-1632317038.jpg'
                        //'https://image.shutterstock.com/image-photo/large-industrial-equipment-heating-pipe-260nw-1632532333.jpg'
                        //'https://image.shutterstock.com/image-photo/welders-connect-building-structure-under-260nw-1632451408.jpg'
                        //'https://image.shutterstock.com/image-photo/red-cat-next-toy-cart-260nw-1632423574.jpg'
                        //'https://image.shutterstock.com/image-photo/crested-ibis-flies-foraging-habitat-260nw-1632347386.jpg'
                       )}>AddImageToDatabase</Button> */}
                
            </View>
        )
    }
};



const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        // marginTop: 80,
        alignItems: 'center',
        justifyContent: "center"
    }
});

const mapStateToProps =  state => {
    return {
        posts: state.postReducer.posts
    }
}
const mapDispatchToProps = dispatch => {
    return{
        imageToDatabase : (img) => dispatch(createPostAction(img)),
        fetchPosts : () => dispatch(fetchPostAction()),
        clearPosts: () => dispatch(clearPostAction()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
// export default Feeds;