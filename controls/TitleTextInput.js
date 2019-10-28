import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Animated } from 'react-native'
import CONFIG from '../configs/Constants'

export default class TitleTextInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slideInUp: new Animated.Value(0),
            fadeIn: new Animated.Value(0)
        }
    }

    _start = function() {
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
        var titleTextInputContainer = StyleSheet.flatten([
            titleTextInputStyle.container,
            {
                transform: [
                    {
                        translateY: this.state.slideInUp.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 0]
                        })
                    }
                ],
                opacity: this.state.fadeIn
            }
        ])

        return (
            <Animated.View style={titleTextInputContainer}>
                <Text style={titleTextInputStyle.text}>{this.props.name}</Text>
                <TextInput
                    style={titleTextInputStyle.textInput}
                    secureTextEntry={this.props.isPassword}
                    placeholder={this.props.placeholder}
                />
                <View style={titleTextInputStyle.line}></View>
            </Animated.View>
        )
    }
}

const titleTextInputStyle = StyleSheet.create({
    container: {
        width: CONFIG.DEVICE_WIDTH - CONFIG.constraintLayout(2 * 36),
        height: CONFIG.constraintLayout(44),
        marginLeft: CONFIG.constraintLayout(36),
        marginBottom: CONFIG.constraintLayout(25),
    },
    text: {
        fontSize: CONFIG.constraintLayout(10),
        height: CONFIG.constraintLayout(12),
        fontWeight: 'bold',
        paddingLeft: CONFIG.constraintLayout(3),
        marginBottom: CONFIG.constraintLayout(10),
        color: '#B4B4B4'
    },
    textInput: {
        height: CONFIG.constraintLayout(21),
        fontSize: CONFIG.constraintLayout(16),
        paddingLeft: CONFIG.constraintLayout(1),
        color: 'black'
    },
    line: {
        height: CONFIG.constraintLayout(1),
        backgroundColor: '#CCCCCC'
    }
})