class ApiService {

    api(type, data, method)
    {
        var URL = "http://localhost:8080/" + type
        return fetch(URL, {
            method: method,
            body: JSON.stringify(data),
            headers: new Headers({'Content-Type': 'application/json'})
        }).then(response => {
            return response.json();
        }).catch(error =>{
            return JSON.stringify(error.message)
        });
    }

    checkValidUser(data){return this.api('check-valid-user',data)};

}

export default new ApiService();
