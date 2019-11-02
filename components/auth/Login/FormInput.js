import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TitleTextInput from '../../../controls/TitleTextInput'

class LoginFormInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: this.props.userName,
            password: this.props.password
        }
    }

    render() {
        return (
            <View style={LoginFormInputStyles.loginContainer}>
                <View></View>
                <TitleTextInput name="Username" onChangeContent= { text => {
                    this.props.userNameOnChanged(text)
                }} ></TitleTextInput>
                <TitleTextInput name="Password" isPassword={true} onChangeContent= { text => {
                    this.props.passwordOnChanged(text)
                }}></TitleTextInput>
            </View>
        );
    }
}

const LoginFormInputStyles = StyleSheet.create({
    loginContainer: {
        backgroundColor: 'transparent'
    }
});

export default LoginFormInput