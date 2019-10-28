import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated } from 'react-native';
import CONFIG from '../../../configs/Constants'
import Ripple from 'react-native-material-ripple'

class LoginButtons extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slideInUp: new Animated.Value(0),
            fadeIn: new Animated.Value(0)
        }
    }

    _start = function () {
        return Animated.parallel([
            Animated.timing(this.state.slideInUp, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }),

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
        var SignInShowStyles = StyleSheet.flatten([
            LoginButtonsStyles.greenHorizontalButton,
            {
                opacity: this.state.fadeIn,
                transform: [{
                    translateY: this.state.slideInUp.interpolate({
                        inputRange: [0, 1],
                        outputRange: [100, 0]
                    })
                }]
            }
        ])
        var SignUpShowStyles = StyleSheet.flatten([
            LoginButtonsStyles.borderHorizontalButton,
            {
                opacity: this.state.fadeIn,
                transform: [{
                    translateY: this.state.slideInUp.interpolate({
                        inputRange: [0, 1],
                        outputRange: [100, 0]
                    })
                }]
            }
        ])
        return (
            <View style={LoginButtonsStyles.container}>
                <View style={LoginButtonsStyles.horizontalContainer}>
                    <Animated.View style={SignInShowStyles}>
                        <Ripple 
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width:'100%', height:'100%'}}
                            rippleSize={244}
                            rippleDuration={800}>
                            <Text style={LoginButtonsStyles.signInTextStyle}> Sign In </Text>
                        </Ripple>
                    </Animated.View>
                    <Animated.View style={SignUpShowStyles}>
                        <Ripple 
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width:'100%', height:'100%'}}
                            rippleSize={244}
                            rippleDuration={800}>
                            <Text style={LoginButtonsStyles.signUpTextStyle}> Sign Up </Text>
                        </Ripple>
                    </Animated.View>
                </View>
                <View >
                    {/* <Button style={LoginButtonsStyles.forgotPass} title='Forgot Password?'></Button> */}
                </View>
            </View>
        );
    }
}

const LoginButtonsStyles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'transparent',
        marginLeft: 36,
        marginRight: 36
    },
    horizontalContainer: {
        flexDirection: 'row',
        height: 50,
        flex: 1
    },
    greenHorizontalButton: {
        height: 50,
        flex: 1,
        backgroundColor: '#77CA85',
        marginRight: CONFIG.constraintLayout(1),
        borderWidth: CONFIG.constraintLayout(2),
        borderRadius: CONFIG.constraintLayout(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#77CA85',
    },
    borderHorizontalButton: {
        height: 50,
        flex: 1,
        backgroundColor: 'transparent',
        marginLeft: CONFIG.constraintLayout(1),
        borderWidth: CONFIG.constraintLayout(2),
        borderRadius: CONFIG.constraintLayout(10),
        borderColor: '#77CA85',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signInTextStyle: {
        color: 'white',
        fontWeight: 'bold'
    },
    signUpTextStyle: {
        color: '#77CA85',
        fontWeight: 'bold'
    }
});

export default LoginButtons