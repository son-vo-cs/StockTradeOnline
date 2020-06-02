const fetch = require("node-fetch");
class ApiService {

    api(type, data, method)
    {
        var URL = "http://localhost:8080/" + type
        return fetch(URL, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => {
            return response.json();
        }).catch(error =>{
            return JSON.stringify(error.message)
        });
    }

    checkValidUser(data){return this.api('check-valid-user',data, 'POST')};
    register(data){return this.api('register', data, 'POST')};
    login(data){return this.api('login', data,'POST')};

}

export default new ApiService();
