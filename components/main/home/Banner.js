import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';
const { width } = Dimensions.get('window')

class HomeBanner extends Component {

    data = [
        require('../../../assets/b1.jpg'),
        require('../../../assets/b2.jpg'),
        require('../../../assets/b3.jpg'),
        require('../../../assets/b4.jpg')
    ]

    _renderItem({ item, index }) {
        return (
            <View style={HomeBannerStyles.slide}>
                <Image style={{ width, flex: 1, resizeMode: 'cover' }} source={item} />
                <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.5 }} />
            </View>
        );
    }

    updateAutoPlay = (value) => {
        if(value == true) {
            this._carousel.startAutoplay()
        } else {
            this._carousel.stopAutoplay() 
        }
    } 

    constructor(props) {
        super(props)
        this.state = {
            userName: this.props.userName,
            password: this.props.password,
            autoplay: true
        }
    }

    render() {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.data}
                renderItem={this._renderItem}
                sliderWidth={width}
                itemWidth={width}
                autoplay = {this.state.autoplay}
                loop = {true}
                inactiveSlideScale={1}
            />
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