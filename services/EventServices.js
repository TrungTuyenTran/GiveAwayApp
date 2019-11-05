import BaseServices from './BaseServices'
import CONFIG from '../configs/Constants'
import Parser from '../helpers/Parser'
import Cache from '../helpers/Cache'
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image, FlatList } from 'react-native';

export default class UserService {

    // Get Events
    static async getAvailableEvents(callback) {
        BaseServices.request(CONFIG.baseURL + '/events', CONFIG.GET, null, null)
            .then((response) => response.json())
            .then((responseJson) => {
                let res = JSON.parse(Parser.parseData(responseJson))
                switch (res.status) {
                    case CONFIG.SUCCESS:
                        var events = []
                        for(let i = 0; i < res.data.length; i++){
                            let event = JSON.parse(Parser.parseEvent(res.data[i]))
                            if(event.status == "0") {
                                events.push(event)
                            }
                        }
                        callback(events, null)
                        break
                    default:
                        console.log("Error: " + JSON.stringify(res))
                        callback(null, Parser.parseError(res.status, res.message))
                        break
                }
            })
            .catch((error) => {
                console.log("Tuyen error: " + error)
                callback(null, Parser.parseError(0, error.message))
            });
    }
}