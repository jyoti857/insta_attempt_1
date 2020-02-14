import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FeedImage from '../../component/FeedImage';
import {connect} from 'react-redux';
import {Button, Avatar} from 'react-native-paper';
import { createPostAction } from '../../actions/createPostAction';
import { fetchPostAction } from '../../actions/fetchPostAction';
import { clearPostAction } from '../../actions/clearPostAction';
import postReducer from '../../reducers/postReducer';
import Icon from 'react-native-vector-icons/FontAwesome';

class Feeds extends React.Component{
    zoe1 = require('../../../assets/zoe1.jpg');
    zoe2 = require('../../../assets/zoe1.jpg');
    l1 = require('../../../assets/l1.jpg');
    l2 = require('../../../assets/l1.jpg');
    john1 = require('../../../assets/john1.jpeg');
    john2 = require('../../../assets/john1.jpeg');
    componentDidMount(){
        this.props.fetchPosts();
        console.log("from feeds index --->", this.props.posts);
        this.props.posts.map(post => console.log(post[0].image))
    }

    static navigationOptions = {
        headerLeft: <Icon name = 'camera' size={30} style={{marginLeft:10}}  />,
        title: "Instagram",
        headerRight: <Icon  name = 'paper-plane-o' size = {30} style={{marginRight:10}} />
    }
    
    render(){
        return(
            <View 
                // style = {{flex:2}}
            >
                <View style = {{flexDirection : 'row', justifyContent: "space-between", margin: 10}}>
                        <Text style={{fontSize: 20, fontWeight: '400'}}>Stories</Text>
                        <Text style = {{fontSize: 20, fontWeight: '400'}}>Watch All</Text>
                    </View>
                <View 
                    style = {styles.container}
                >
                    <View style  = {{flexDirection: 'row'}}>
                        <Button onPress = {this.props.clearPosts}>Clear posts</Button>
                        <Button onPress = {this.props.fetchPosts}>Fetch posts</Button>
                    </View>
                    
                    <ScrollView 
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        contentContainerStyle = {{flexDirection: 'row',
                            marginBottom: 20 
                        }}>
                <Avatar.Image size = {70} source = {this.zoe1}
                            style = {{margin:10, borderWidth:4, borderColor: 'pink'}}
                        />
                <Avatar.Image size = {70} source = {this.l1}
                            style = {{margin:10, borderWidth:4, borderColor: 'pink'}}
                        />
                <Avatar.Image size = {70} source = {this.john1}
                            style = {{margin:10, borderWidth:4, borderColor: 'pink'}}
                        />
                <Avatar.Image size = {70} source = {this.zoe2}
                            style = {{margin:10, borderWidth:4, borderColor: 'pink'}}
                        />
                <Avatar.Image size = {70} source = {this.l2}
                            style = {{margin:10, borderWidth:4, borderColor: 'pink'}}
                        />
                <Avatar.Image size = {70} source = {this.john2}
                            style = {{margin:10, borderWidth:4, borderColor: 'pink'}}
                        />
                <Avatar.Image size = {70} source = {this.l1}
                            style = {{margin:10, borderWidth:4, borderColor: 'pink'}}
                        />
            </ScrollView>


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