import React, { Component } from 'react'
import DrawChart from './DrawChart'

var fs = require('fs');
const fetch = require("node-fetch");



class Stock extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data : "htui al",
            displayDay: -1,
            temp: "henhen"
        };

    };


    render()
    {


        return (
            <div className="App">
                {/* <h1>Hello, React!</h1> */}
                {/* <h1>{this.props.option.symbol}</h1> */}
                <DrawChart arg = {this.state} option={this.props.option}/>
            </div>
        );
    }
    // componentDidMount(){
    //     // var contents = fs.readFileSync('./src/component/text.txt', 'utf8');
    //     // console.log(contents);
    // }
    componentDidMount(){
        if (this.props.option.symbol.length < 1)
        {
            var data = setData(this.props.option.prices,this.props.option.dates,"");
            this.setState(
                {
                    data:data,
                    displayDay:-1,
                    temp:this.props.option.symbol
                }
            );
        }
        else
        {
            var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
            url += this.props.option.symbol + '&apikey=Z246PXB1COOHZ4VD';
            fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(content => {
                var data = convertData(content, "");
                this.setState({
                    data: data,
                    displayDay: -1,
                    temp: data.title
                });



            });
        }
        
    }


}



function setData(prices,dates, title)
{
    var priceweek = prices.slice(0,7);
    var pricemonth = prices.slice(0,30);

    var data =
        {
            pricesWeek: priceweek,
            pricesMonth: pricemonth,
            pricesAll: prices,
            datesWeek: dates.slice(0,7),
            datesMonth: dates.slice(0,30),
            datesAll: dates,
            title : title,
            colorWeek: (priceweek[priceweek.length-1] >= priceweek[0] ? "#2fcf9a" : "red"),
            colorMonth: (pricemonth[pricemonth.length-1] >= pricemonth[0] ? "#2fcf9a" : "red"),
            colorAll: (prices[prices.length-1] >= prices[0] ? "#2fcf9a" : "red")
        };
    return data;   
}


function convertData(contents, title)
{
    var prices = [];
    var dates = [];
    // var dataJSON = JSON.parse(contents.toString());
    var dataJSON = contents;
    dataJSON = dataJSON['Time Series (Daily)'];
    var keys = Object.keys(dataJSON);
    for (var i = keys.length-1; i >= 0; i--)
    {
        prices.push(dataJSON[keys[i]]['4. close']);
        dates.push(keys[i]);
    }

    return setData(prices,dates, title);
}





let count = 0;
let keys = [
    "MTWK5TW2B9QWRNP7",
    "GFOZU551L9QMGNRM",
    "NZ0ON2WUC1ZDD8FW",
    "7MDO5Y5AEV8ADU52",
    "36EB5YY6CTKAO2J3",
    "71OY0WFPGNE6ZGM1",
    "UHNZZO6S4448560M",
];
function getDate()
{
    var myDate = new Date();
    myDate = new Date(myDate.getTime()-1000*60*60*7);
    return myDate.toISOString().slice(0,10);
}

function addDate(dateString, num)
{
    var myDate = new Date(dateString);
    myDate = new Date(myDate.getTime()+1000*60*60*24*num);
    return myDate.toISOString().slice(0,10);
}


function getSizeDate(date1, date2)
{
    var diff = getDiff(date1, date2);
    return diff <= 99 ? "compact" : "full";
}

function getDiff(date1, date2)
{
    var time1 = new Date(date1.getTime());
    var time2 = new Date(date2.getTime());
    var diff = Math.abs(time1-time2)*1.0;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

//
// fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     });


export default Stock