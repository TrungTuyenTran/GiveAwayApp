import React from 'react';
import { StyleSheet, View, Button  } from 'react-native';
import CONFIG from '../../../configs/Constants';
import HomeBanner from '../home/Banner'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HomeBanner/>
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
        flex: 1, alignItems: 'center'
    }
})

export default HomeScreen