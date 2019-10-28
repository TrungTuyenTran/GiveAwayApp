import { Dimensions, PixelRatio } from 'react-native'

export default class CONFIG {
    static LoginSessionKey = 'login_session'
    static baseURL = 'https://giveawayapi.herokuapp.com/api/v1';
    static PUT = 'PUT'
    static POST = 'POST'
    static DELETE = 'DELETE'
    static GET = 'GET'
    static SUCCESS = 200
    static DEVICE_WIDTH = Dimensions.get('window').width;
    static DEVICE_HEIGHT = Dimensions.get('window').height;
    static MAGIC_NUMBER = 375
    static constraintLayout = (attributeSize) => {
        return (attributeSize * CONFIG.DEVICE_WIDTH) / CONFIG.MAGIC_NUMBER;
      };
}