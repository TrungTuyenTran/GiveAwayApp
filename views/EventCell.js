import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import CONFIG from '../configs/Constants';
import Ripple from 'react-native-material-ripple'

class EventCell extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.event.image)
    }

    render() {
        return (
            <TouchableOpacity style={EventCellStyles.container} onPress={() => {this.props.transitionToDetail(this.props.event)}}>
                <Image 
                    style={EventCellStyles.image} source={{ uri: this.props.event.avatar }} 
                    resizeMode="cover"
                />
                <Text numberOfLines={2} style={EventCellStyles.title}>{this.props.event.name}</Text>
                <Text numberOfLines={3} style={EventCellStyles.description}>{this.props.event.description}</Text>
                <View style={EventCellStyles.button}>
                    <Ripple
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
                        rippleSize={244}
                        rippleDuration={800}
                        onPress={this.props.signUpOnPress}>
                        <Text style={EventCellStyles.textButton}> Shop Now </Text>
                    </Ripple>
                </View>
            </TouchableOpacity>
        );
    }
}

const EventCellStyles = StyleSheet.create({
    container: {
        marginLeft: 5, marginRight: 5, marginBottom: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        width: (CONFIG.DEVICE_WIDTH - 30) / 2,
        flex: 1, alignItems: 'center',
        height: 250,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    image: {
        width: '100%', aspectRatio: 2 / 1,
        borderTopLeftRadius: 10, borderTopRightRadius: 10
    },
    title: {
        marginTop: 3,
        marginLeft: 0,
        marginRight: 0,
        height: 40,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'left'
    },
    description: {
        marginTop: 3,
        marginLeft: 5,
        marginRight: 5,
        height: 44,
        color: 'black',
        fontSize: 12,
        textAlign: 'left'
    },
    button: {
        marginTop: 20,
        height: 30,
        width: 100,
        borderRadius: 5,
        backgroundColor: '#77CA85',
        marginBottom: 10
    },
    textButton: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default EventCell