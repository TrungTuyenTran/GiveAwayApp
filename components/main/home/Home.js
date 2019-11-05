import React from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import CONFIG from '../../../configs/Constants';
import HomeBanner from '../home/Banner'
import ListEvent from '../home/ListEvent';
const { width } = Dimensions.get('window')

class HomeScreen extends React.Component {

    heightBanner = width / 2

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#77CA85',
        },
        headerTintColor: '#fff',
        headerLeft: () => (
            <TouchableOpacity onPress={() => { alert("Show menu items") }}
                style={{ alignItems: 'center' }}>
                <View style={{ marginHorizontal: 10, width: 30, height: 30 }}>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../../../assets/ic_menu.png')}
                    />
                </View>
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => { alert("Show cart items") }}
                style={{ alignItems: 'center' }}>
                <View style={{ marginRight: 10, width: 30, height: 30, alignItems: 'flex-end' }}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../../../assets/ic_shopping-cart.png')}
                    />
                    <View style={{ width: 10, height: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', position: 'absolute', borderRadius: 5, borderColor: 'white', borderWidth: 1 }}>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    constructor(props) {
        super(props)
        this.currentBanner = React.createRef();
        this.state = {
            offset: 0,
            headerTranslateY: 0,
            autoplayBanner: true
        }
    }

    Item({ title }) {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'transparent', position: 'absolute' }}>
                    <ListEvent
                        topInset={this.heightBanner}
                        offset={-this.heightBanner}
                        type={'available'}
                        onScroll={(event) => {
                            if ((event.nativeEvent.contentOffset.y <= -this.heightBanner)) {
                                this.setState({
                                    offset: event.nativeEvent.contentOffset.y,
                                    headerTranslateY: 0
                                })
                            } else {
                                this.setState({
                                    offset: event.nativeEvent.contentOffset.y,
                                    headerTranslateY: -(this.heightBanner + event.nativeEvent.contentOffset.y)
                                })
                            }

                            if(event.nativeEvent.contentOffset.y >= -(this.heightBanner/2)) {
                                this.currentBanner.current.updateAutoPlay(false)
                            } else {
                                this.currentBanner.current.updateAutoPlay(true)
                            }
                        }}
                    />
                </View>
                <View style={{
                    width: '100%', height: this.heightBanner, backgroundColor: 'transparent',
                    transform: [{
                        translateY: this.state.headerTranslateY
                    }]
                }}>
                    <HomeBanner ref={this.currentBanner}  />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center'
    },

    leftNavigationButton: {

    }
})

export default HomeScreen