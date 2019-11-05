import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Dimensions, Image, FlatList, Text } from 'react-native';
import EventServices from '../../../services/EventServices'
import CONFIG from '../../../configs/Constants';
import EventCell from '../../../views/EventCell';
const { width } = Dimensions.get('window')

class ListEvents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isInitial: true,
            isFetching: false,
            events: [],
            getData: (callback) => {
                switch (this.props.type) {
                    case 'available':
                        EventServices.getAvailableEvents((events, error) => {
                            this.setState({
                                events: events,
                                isInitial: false,
                            })
                            callback()
                        })
                        break
                    case 'search':
                        this.setState({
                            events: []
                        })
                        callback()
                        break
                    default:
                        break
                }
            }
        }
        this.state.getData(() => {})
    }

    updateBottomInset = () => {
        if(this.state.events.length == 0) {
            return -this.props.topInset
        } else {
            return 0
        }
    }

    render() {
        if(this.state.isInitial) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator style={{marginTop: this.props.topInset}} size="large" color= '#77CA85'></ActivityIndicator>
                </View>
            )
        } else {
            return (
                <View style={ListEventsStyles.container}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        automaticallyAdjustContentInsets={false}
                        contentInset={{ top: this.props.topInset, bottom: this.updateBottomInset()}}
                        contentOffset={{ y: this.props.offset }}
                        numColumns={2}
                        style={ListEventsStyles.flatList}
                        data={this.state.events}
                        renderItem=
                        {({ item }) =>
                        <EventCell
                            image={item.avatar} 
                            title={item.name}
                            description={item.description}/>
                        }
                        bounces={true}
                        refreshing={this.state.isFetching}
                        onRefresh={() => {
                            this.setState({
                                isFetching: true
                            })
                            this.state.getData(() => {
                                this.setState({
                                    isFetching: false
                                })
                            })
    
                        }}
                        onScroll={(event) => {
                            this.props.onScroll(event)
                        }}
                        ListEmptyComponent= {
                            () => 
                            <View style={ListEventsStyles.noDataView}>
                                <Image 
                                    style={{
                                        width: width/4,
                                        height: width/4,
                                        marginTop: -this.props.topInset
                                    }}
                                    source={require('../../../assets/no-donation.png')} 
                                />
                                <Text style={ListEventsStyles.titleNoData}> No event.{"\n"}If you know any charities, please send contact to us.</Text>
                            </View>
                        }
                        contentContainerStyle={{ flexGrow: 1 }}
                    />
                </View>
            )
        }
    }
}

ListEvents.defaultProps = {
    topInset: 0,
    offset: 0,
    type: 'available',
    onScroll: (event) => {}
};

const ListEventsStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatList: {
        width: '100%',
        flex: 1,
        marginTop: CONFIG.constraintLayout(10),
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#F5F5F5'
    },

    item: { 
        marginLeft: 5, marginRight: 5, marginBottom: 10, 
        backgroundColor: '#77CA85', 
        height: 250, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: (CONFIG.DEVICE_WIDTH - 30) / 2 
    },

    noDataView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleNoData: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'center'
    }
})

export default ListEvents