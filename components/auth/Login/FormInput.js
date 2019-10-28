import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TitleTextInput from '../../../controls/TitleTextInput'

class LoginFormInput extends Component {
    render() {
        return (
            
                    <View style={LoginFormInputStyles.loginContainer}>
                        <View></View>
                        <TitleTextInput name="Username"></TitleTextInput>
                        <TitleTextInput name="Password" isPassword={true}></TitleTextInput>
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