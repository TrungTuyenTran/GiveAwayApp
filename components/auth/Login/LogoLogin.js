import React, { Component } from 'react';
import { StyleSheet, View, Image ,Animated} from 'react-native';
import CONFIG from '../../../configs/Constants'

class LoginLogo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fadeIn: new Animated.Value(0)
        }
    }

    _start = function() {
        return Animated.parallel([

            Animated.timing(this.state.fadeIn, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }),

        ]).start()
    }

    componentDidMount() {
        this._start()
    }

    render() {
        var LoginLogoStylesImage = StyleSheet.flatten([
            LoginLogoStyles.image,
            {
                opacity: this.state.fadeIn
            }
        ])
        return (
            <View style={LoginLogoStyles.loginContainer}>
                <Animated.Image style={LoginLogoStylesImage} source = {require('../../../assets/logo.png')} />
            </View>
        );
    }
}

const LoginLogoStyles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0, marginLeft: 0, marginRight: 0,
        width: '100%', height: CONFIG.DEVICE_WIDTH - CONFIG.constraintLayout(40)
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'contain'
    }
});

export default LoginLogo