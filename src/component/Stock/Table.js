// // import React, { Component } from 'react'
// //
//
const fetch = require("node-fetch");

const temp =
    {
        data: null,
        day: 7,
    };

// fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=aapl&apikey=Z246PXB1COOHZ4VD')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(content) {
//         var data = convertData(content, "aapl");
//         temp.data = data;
//         console.log(temp.data['title'])
//
//
//
//     });
//
let url = 'http://localhost:8080/SpringRestfulWebServicesCRUDExample/countries';
let postBody = {
    "id": 3,
    "countryName": "Nepal",
    "population": 20
};
fetch(url, {
    method: 'PUT',
    body: JSON.stringify(postBody),
    headers: {
        'Content-Type': 'application/json'
    }
}).then((resp) => {
    if (!resp.ok) {
        throw Error('Sorry the password and username do not match');
    }
    return resp.json();
}).then(function(content)
{
    console.log("hahah");
    console.log(content);
});

