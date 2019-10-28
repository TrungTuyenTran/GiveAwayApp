import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Loader from '../../../controls/Loader'
import UserService from '../../../services/UserServices'
import LoginFormInput from '../Login/FormInput'
import LoginLogo from '../Login/LogoLogin'
import LoginButtons from '../Login/LoginButtons'

class LoginScreen extends Component {
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    tapRegister = function () {
        this.setState({ loading: true })
        const callback = function (res, err) {
            this.setState({ loading: false })
            if (err) {
                this.props.navigation.navigate('Register', { 'json': err.message })
            } else {
                this.props.navigation.navigate('Register', { 'json': JSON.parse(res) })
            }
        }.bind(this)
        UserService.login('donor1', 'password', callback)
    }.bind(this)

    render() {
        return (
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <KeyboardAvoidingView behavior="position" style={styles.container}>
                            <LoginLogo />
                            <LoginFormInput />
                            <LoginButtons />
                        </KeyboardAvoidingView>
                    </View>
                    <Loader loading={this.state.loading} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    backgroundContainer: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'red'

    },
    backgroundImage: {
        position: 'absolute', width: '100%', height: '100%',
    }
});

export default LoginScreen;