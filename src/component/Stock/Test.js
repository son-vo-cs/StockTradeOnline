
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
        symbol: "SPY",
        showButs: true,
        showTitle: true,
        prices: [1,2,3,4,5],
        dates: ['2011','2012','2013','2014','2015'],
        width: 600,
        height: 300,
        size: 'small',
        
        showPerformance: true,
        history:
        {
          action: [3,-1,-1,+1],
          hisDates:['2011','2013','2014','2015'],
          priceHis: [213,210,208,230]
        },
        


        showAccount: true,
        fund: 1500,
        ownStock: ["SPY"]


        
      }
      
      var aa = {list: ["a","b","c"], data: {"Michael": "Mi ly", "MSFT": "Microsoft Inc", "MA": "Mama"}};
        return (
          // <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Stock option={option}></Stock>
          // </div>
          // <div>
            // <SearchBar argument={aa}></SearchBar>
          // {/* <Home></Home> */}
          // </div>
        );
      }
    
}



export default Test;