import Cache from '../helpers/Cache'
import CONFIG from '../configs/Constants'

export default class BaseService {
    static async request(url,method = CONFIG.GET, headers, body) {
        let login_session = await Cache.getCacheData(CONFIG.LoginSessionKey)
        var accessToken = ''
        if (login_session) {
            accessToken = JSON.parse(login_session).access_token
        }
        console.log("Token: " + accessToken)
        var bodyContent = null
        if(body != null) {
            bodyContent = JSON.stringify(body)
        }
        return fetch(url, {
            method: method,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            body: bodyContent
        })
    }
}