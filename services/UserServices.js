import BaseServices from './BaseServices'
import CONFIG from '../configs/Constants'
import Parser from '../helpers/Parser'
import Cache from '../helpers/Cache'

export default class UserService {

    // Login
    static async login(username, password, callback) {
        let paramsBody = {
            username: username,
            password: password,
        }
        BaseServices.request(CONFIG.baseURL + '/auth/login', CONFIG.POST, null, paramsBody)
            .then((response) => response.json())
            .then((responseJson) => {
                let res = JSON.parse(Parser.parseData(responseJson))
                switch (res.status) {
                    case CONFIG.SUCCESS:
                        let login_session = {
                            access_token: res.data.access_token,
                            token_type: res.data.token_type,
                            expires_in: res.data.expires_in
                        }
                        Cache.storeCacheData(CONFIG.LoginSessionKey, JSON.stringify(login_session))
                        callback(Parser.parseUser(res.data.user, res.data.roles), null)
                        break
                    default:
                        console.log("Error: " + JSON.stringify(res))
                        callback(null, Parser.parseError(res.status, res.message))
                        break
                }
            })
            .catch((error) => {
                callback(null, Parser.parseError(0, error.message))
            });
    }

    // Register
    static async register(userInfo, callback) {
        let body = {
            email: userInfo.email,
            password: userInfo.password,
            password_confirm: userInfo.password_confirm,
            name: userInfo.name,
            username: userInfo.username,
            address: userInfo.address,
            phone_number: userInfo.phone_number,
            role_id: userInfo.role_id
        }
        BaseServices.request(CONFIG.baseURL + '/auth/register', CONFIG.POST, null, body)
            .then((response) => response.json())
            .then((responseJson) => {
                let res = Parser.parseData(responseJson)
                switch (res.status) {
                    case CONFIG.SUCCESS:

                    default:
                        callback(null, Parser.parseError(response.meta.status, response.meta.message))
                }
            })
            .catch((error) => {
                callback(null, Parser.parseError(0, error.message))
            })
    }

    // Logout
    static async logout(callback) {
        BaseServices.request(CONFIG.baseURL + '/auth/logout', CONFIG.GET)
            .then((response) => {
                if (response.status == 204) {
                    Cache.removeCacheItem(CONFIG.LoginSessionKey)
                    callback({ status: CONFIG.SUCCESS, message: "Success" }, null)
                } else {
                    response.json()
                }
            })
            .then((responseJson) => {
                if (responseJson) {
                    switch (responseJson.status) {
                        case 200:
                            callback({ status: CONFIG.SUCCESS, message: "Success" }, null)
                            break
                        default:
                            callback(null, JSON.parse(Parser.parseError(responseJson.meta.status, responseJson.meta.message)))
                            break
                    }
                }
            })
            .catch((error) => {
                callback(null, JSON.parse(Parser.parseError(0, error.message)))
            })
    }

    // Get Me Info
    static async getMeInfo(callback) {
        BaseServices.request(CONFIG.baseURL + '/auth/me', CONFIG.GET)
            .then((response) => response.json())
            .then((responseJson) => {
                let res = JSON.parse(Parser.parseData(responseJson))
                switch (res.status) {
                    case CONFIG.SUCCESS:
                        let user = Parser.parseUser(res.data)
                        callback(user, null)
                        break
                    default:
                        callback(null, JSON.parse(Parser.parseError(res.status, res.message)))
                        break
                }
            })
            .catch((error) => {
                callback(null, JSON.parse(Parser.parseError(0, error.message)))
            })
    }
}