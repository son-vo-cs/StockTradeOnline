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
            temp: "henhen",
            prices:[],
            dates:[],
            update: false
        };

    };


    render()
    {


        return (
            <div className="App">
                {/* <h1>Hello, React!</h1> */}
                {/* <h1>{this.props.option.symbol}</h1> */}
                <DrawChart arg = {this.state} option={this.props.option}/>
                {/* <h1>hashdjashjd</h1> */}
                {/* <h1>{this.state.temp}</h1> */}
                {/* <h1>{this.props.option.ownStock[0].symbol}</h1> */}
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
            var length = this.props.option.dates.length;
            var lastDate = this.props.option.dates[length-1];
            var size = getSizeDate(lastDate, getDate());
            
            
            // this.props.option.ownStock.forEach(symbol =>
            // {
            //     var url = getUrl(size, symbol);
            //     fetch(url)
            //     .then(function(response) {
            //         return response.json();
            //     })
            //     .then(content => {
            //         var data = convertData(content, "");
            //         this.setState({
            //             data: data,
            //             displayDay: -1,
            //             temp: data.title
            //         });
            //     });
            // });

            if (this.props.option.dates[length-1] < getDate())
            {
                var fetches = [];
                this.props.option.ownStock.forEach(item =>
                    {
                        if (item.symbol.length > 1)
                            fetches.push( fetch(getUrl('compact',item.symbol)).then(function(response){ 
                            return response.json()
                   }));
                    });
                Promise.all(fetches).then(values =>
                {
                    var newData = processPerformStock(values, lastDate, this.props.option);
                    return newData;
                }).then((newData) =>
                    {
                        this.setState({
                        data: newData,
                        updates:true,
                        update:true,
                        // temp:"after update"
                    })
                    });
            }
            else
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
            


            
        }
        else
        {
            var size = this.props.option.size === 'small' ? 'compact' : 'full';
            var url = getUrl(size, this.props.option.symbol);
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



function processPerformStock(values, lastDate, option)
{
    var valueTemp = [];
    values.forEach(item => valueTemp.push(getPriceDate(item,lastDate)));
    var newPrices = option.prices.slice();
    var newDates = option.dates.slice();
    for (var i = 0; i < valueTemp[0].prices.length; i++)
    {
        var priceTemp = 0.0;
        // eslint-disable-next-line no-loop-func
        valueTemp.forEach(item => 
        {
            priceTemp = priceTemp + parseFloat(item.prices[i]);
        })
        priceTemp = priceTemp + option.fund;
        newPrices.push(priceTemp);
        newDates.push(valueTemp[0].dates[i]);

    }
    var newData = setData(newPrices, newDates, "");
    
    return newData;
}

function setData(prices,dates, title)
{
    var length = prices.length;
    var priceweek = prices.slice(length-7,length);
    var pricemonth = prices.slice(length-30,length);

    var data =
        {
            pricesWeek: priceweek,
            pricesMonth: pricemonth,
            pricesAll: prices,
            datesWeek: dates.slice(length-7,length),
            datesMonth: dates.slice(length-30,length),
            datesAll: dates,
            title : title,
            colorWeek: (priceweek[priceweek.length-1] >= priceweek[0] ? "#2fcf9a" : "red"),
            colorMonth: (pricemonth[pricemonth.length-1] >= pricemonth[0] ? "#2fcf9a" : "red"),
            colorAll: (prices[prices.length-1] >= prices[0] ? "#2fcf9a" : "red")
        };
    return data;   
}

function getPriceDate(contents, specific)
{
    var prices = [];
    var dates = [];
    // var dataJSON = JSON.parse(contents.toString());
    var dataJSON = contents;
    dataJSON = dataJSON['Time Series (Daily)'];
    var keys = Object.keys(dataJSON);
    var limit = 500;
    var i = Math.min(keys.length-1,limit);
    if (specific.length > 0)
    {
        while (keys[i] <= specific)
            i -= 1;
    }
    for (; i >= 0; i--)
    {
        prices.push(dataJSON[keys[i]]['4. close']);
        dates.push(keys[i]);
        
    }
    var result = {
        prices: prices,
        dates: dates
    }
    return result;
}


function convertData(contents, title)
{
    var priceDate = getPriceDate(contents,"");
    return setData(priceDate.prices,priceDate.dates, title);
}


function getUrl(size, symbol)
{
    var length = keys.length;
    var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
    url += symbol + '&outputsize=' + size + 'full&apikey=';
    var key = keys[count];
    count = (count+1) % length;
    return url + key;

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
    "Z246PXB1COOHZ4VD"
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
    return diff <= 99 ? 'compact' : 'full';
}

function getDiff(date1, date2)
{
    var time1 = new Date(date1).getTime();
    var time2 = new Date(date2).getTime();
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