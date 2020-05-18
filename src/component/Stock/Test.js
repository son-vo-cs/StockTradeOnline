
import React, {Component} from 'react';

import Stock from './Stock'
import {Line} from 'react-chartjs-2';
import SearchBar from './SearchBar'
import Home from '../User/Home'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'white',
      borderColor: 'blue',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class Test extends Component
{
    render() {
      var option = 
      {
        symbol: "",
        showButs: true,
        showTitle: true,
        prices: [1000],
        dates: ['2020-05-18'],
        width: 600,
        height: 300,
        size: 'small',
        
        showPerformance: true,
        history:
        [
          {
            action:3,
            hisDate: '2011',
            price: 213,
          },
          
          {
            action:-1,
            hisDate: '2014',
            price: 208,
          },
          {
            action:1,
            hisDate: '2015',
            price: 230,
          },{
            action:-1,
            hisDate: '2013',
            price: 210,
          },

        ],
        


        showAccount: true,
        fund: 1500,
        ownStock: ["SPY"]


        
      }
      
      var aa = {list: ["a","b","c"], data: {"Michael": "Mi ly", "MSFT": "Microsoft Inc", "MA": "Mama"}};
        return (

          <div>
          {/* // <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> */}
            <Stock option={option}></Stock>
            {/* <SearchBar argument={aa}></SearchBar> */}
            {/* <Home></Home> */}
        </div>
        );
      }
    
}



export default Test;