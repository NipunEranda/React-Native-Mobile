import Config from './Configcontroller'
import Axios from 'axios';

class UserController {
    api: { signin: string; };
    constructor() {
        this.api = {
            signin: "/api/user/login",
        };
    }

    async login(email, password) {
        var requestData = {
            email: email,
            password: password
        }
        var userData = {};
        var resp = 600;
        await Axios.post(
            `${Config.host}${Config.port}${this.api.signin}`,
            requestData
        )
            .then(Response => {
                resp = Response.status;
                userData = Response;
            })
            .catch(err => {
                console.error(err);
                try {
                    console.error(err);
                    resp = err.response.status;
                } catch (error) {
                    console.log(error);
                    resp = 600;
                }
            });

        if (resp === 200) {
            return JSON.stringify(userData);
        }
        return resp;

    }

}

var UserObject = new UserController();
export default UserObject;
