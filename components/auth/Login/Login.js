import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text } from 'react-native';
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
            loading: false,
            userName: '',
            password: ''
        }
    }

    tapSignIn = function () {
        this.setState({ loading: true })
        const callback = function (res, err) {
            this.setState({ loading: false })
            if (err) {
                alert(err.message)
            } else {
                this.props.navigation.navigate('Register', { 'json': JSON.parse(res) })
            }
        }.bind(this)
        UserService.login(this.state.userName, this.state.password, callback)
    }.bind(this)

    render() {
        return (
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss} accessible={false}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
                            <LoginLogo />
                            <LoginFormInput userName={this.state.userName} password={this.state.password}
                                passwordOnChanged={password => {
                                    this.setState(
                                        { password: password }
                                    )
                                }}
                                userNameOnChanged={userName => {
                                    this.setState(
                                        { userName: userName }
                                    )
                                }} />
                            <LoginButtons signInOnPress={this.tapSignIn} />
                        </KeyboardAvoidingView>
                        <View style={styles.bottomView}>
                            <TouchableOpacity
                                style={styles.touchableOpacity}
                                onPress={() => { this.props.navigation.navigate('Home') }}
                            >
                                <Text style={styles.buttonWithoutAccess}>Access without Login</Text>
                            </TouchableOpacity>
                        </View>
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
    },
    bottomView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50
    },
    touchableOpacity: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center', justifyContent: 'center'
    },
    buttonWithoutAccess: {
        fontSize: 14,
        color: '#007aff'
    },
});

export default LoginScreen;