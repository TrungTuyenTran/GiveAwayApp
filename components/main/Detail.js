import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class DetailScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Detail Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, alignItems: 'center', justifyContent: 'center' 
    }
})

export default DetailScreen