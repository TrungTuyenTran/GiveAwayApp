import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image} from 'react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window')

class HomeBanner extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: this.props.userName,
            password: this.props.password
        }
    }

    render() {
        return (
            <View style={{ width: '100%', height: width * 1 / 2, justifyContent: 'center' }}>
                <Swiper
                    style={HomeBannerStyles.wrapper}
                    loop={true}
                    autoplay={true}
                    dotColor='white'
                    activeDotColor='#77CA85'
                    index={0}
                >
                    <View style={HomeBannerStyles.slide}>
                        <Image style={{width, flex: 1, resizeMode: 'cover'}} source={require('../../../assets/b1.jpg')} />
                        <View style={{position: 'absolute', width: '100%', height: '100%' , backgroundColor: 'black', opacity: 0.5}} />
                    </View>
                    <View style={HomeBannerStyles.slide}>
                        <Image style={{width, flex: 1, resizeMode: 'cover'}} source={require('../../../assets/b2.jpg')} />
                        <View style={{position: 'absolute', width: '100%', height: '100%' , backgroundColor: 'black', opacity: 0.5}} />
                    </View>
                    <View style={HomeBannerStyles.slide}>
                        <Image style={{width, flex: 1, resizeMode: 'cover'}} source={require('../../../assets/b3.jpg')} />
                        <View style={{position: 'absolute', width: '100%', height: '100%' , backgroundColor: 'black', opacity: 0.5}} />
                    </View>
                    <View style={HomeBannerStyles.slide}>
                        <Image style={{width, flex: 1, resizeMode: 'cover'}} source={require('../../../assets/b4.jpg')} />
                        <View style={{position: 'absolute', width: '100%', height: '100%' , backgroundColor: 'black', opacity: 0.5}} />
                    </View>
                </Swiper>
            </View>
        );
    }
}

const HomeBannerStyles = StyleSheet.create({
    wrapper: {
        // flex:1
        // backgroundColor: 'transparent'
    },
    slide: {
        width,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
});

export default HomeBanner