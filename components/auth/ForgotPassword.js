import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ForgotPasswordScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Forgot Password Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, alignItems: 'center', justifyContent: 'center' 
    }
})

export default ForgotPasswordScreen