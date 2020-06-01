class ApiService {

    apiOSD(type, data, method)
    {
        var URL = 'https://osdb.herokuapp.com/' + type
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

    login(data){return this.apiOSD('login',data)};
    register(data){return this.apiOSD('register',data)};
    getAll(){return this.apiOSD('getAll',{"a":2})};
    getItem(data) {return this.apiOSD('getItem',data)};
    addItem(data){return this.apiOSD('addItem',data)};
    checkAvailable(data) {return this.apiOSD('checkAvailable',data)};
    submitOrder(data){return this.apiOSD('submitOrder',data)};
    getOrderHistory(data){return this.apiOSD('getOrderHistory',data)};
    getOrderHistoryDetail(data){return this.apiOSD('getOrderHistoryDetail', data)};
    getShipAddress(){return this.apiOSD('getShipAddress')};
    markDelivered(data){return this.apiOSD('markDelivered',data)};
    deleteItem(data){return this.apiOSD('deleteItem',data)};

}

export default new ApiService();
