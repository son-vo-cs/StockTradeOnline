
import React, {Component} from 'react';

import Stock from './Stock'
import {Line} from 'react-chartjs-2';


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
        symbol: "AAPL",
        showButs: false,
        showTitle: true,
        prices: [1,2,3],
        dates: ['2011','2012','2013'],
        width: 600,
        height: 300,
        size: 'small'
      }
        return (
          <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Stock option={option}></Stock>
          </div>
        );
      }
    
}



export default Test;