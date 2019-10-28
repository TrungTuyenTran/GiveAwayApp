import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Modal
} from 'react-native';

class Loader extends Component {
    render() {
        return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={this.props.loading}>
            <View style={loadingStyles.modalBackground}>
                <View style={loadingStyles.activityIndicatorWrapper}>
                <Image style={{flex: 1, resizeMode: 'contain'}}
                    source={require('../assets/ezgif.com-resize.gif')}
                />
                </View>
            </View>
        </Modal>
        );
    }
}

const loadingStyles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow:'hidden'
    }
});

export default Loader;