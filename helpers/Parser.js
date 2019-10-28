import CONFIG from '../configs/Constants'

export default class Parser {
    
    static parseUser(data, roles) {
        let user = {
            id: data.id,
            username: data.username,
            email: data.email,
            name: data.name,
            avatar: data.avatar,
            description: data.description,
            phone_number: data.phone_number,
            address: data.address,
            created_at: data.created_at,
            updated_at: data.updated_at,
            roles: roles
        }
        return JSON.stringify(user)
    }

    static parseData(response) {
        if (response) {
            switch (response.meta.status) {
                case CONFIG.SUCCESS:
                    var res = {"status": CONFIG.SUCCESS, "message": "Success", data: response.data};
                    return JSON.stringify(res)
                default:
                    return JSON.stringify(Parser.parseError(response.meta.status, response.meta.message))
            }
        }
    }

    static parseError(errStatus, errMessage) {
        let error = {"status": errStatus, "message": errMessage}
        return JSON.stringify(error)
    }

}