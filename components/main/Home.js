import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Detail"
                    onPress={
                        () => this.props.navigation.navigate('Detail')
                    } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, alignItems: 'center', justifyContent: 'center' 
    }
})

export default HomeScreen