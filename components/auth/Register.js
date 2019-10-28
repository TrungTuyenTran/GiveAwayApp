import React from 'react';
import UserServices from '../../services/UserServices'
import { StyleSheet, View, Text, Button } from 'react-native';

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: JSON.stringify(props.navigation.getParam('json', 'abc')),
            loading: false
        }
    }

    static navigationOptions = {
        header: null
    };

    logout = function() {
        this.setState({ loading: true })
        // UserServices.logout((res, err) => {
        //     this.setState({ loading: false })
        //     if(err) {
        //         alert(JSON.stringify(err))
        //     } else {
        //         this.props.navigation.goBack()
        //     }
        // })
        UserServices.getMeInfo((res, err) => {
            this.setState({ loading: false })
            if (err) {
                alert(JSON.stringify(err))
            } else {
                this.setState({user: res})
            }
        })
    }.bind(this)

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.user}</Text>
                <Button
                    title="Go Back"
                    onPress={this.logout} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }
})

export default RegisterScreen