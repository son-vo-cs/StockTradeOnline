
import React, {Component} from 'react';

import Stock from './Stock'
import {Line} from 'react-chartjs-2';
import SearchBar from './SearchBar'
import Home from '../User/Home'
import Deposit from '../Transaction/Deposit'
import { Redirect } from 'react-router-dom';
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


  homeRedirect = () =>
    {
        if (this.state.userStatus === 'Login')
        {
            this.setState({open:true})
        }
    }


    render() {
      var option = 
      {
        symbol: "SPY",
        showButs: true,
        showTitle: true,
        prices: [1500],
        dates: ['2020-05-08'],
        width: 600,
        height: 300,
        size: 'small',
        
        showPerformance: false,
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
        ownStock: [
          {
            symbol:"SPY",
            shares:5
          },
          {
            symbol:"AAPL",
            shares:2,
          },
          ]


        
      }
      
      var aa = {list: ["a","b","c"], data: {"Michael": "Mi ly", "MSFT": "Microsoft Inc", "MA": "Mama"}};
      var user = {
          userName: "Son",
          userId: 1,
          fund: 1500
      }
      var account = {
        ownStock: []
      }
      var performs = 
      [
        {
          date: "2020-05-27",
          price: 1500
        }
      ]
        return (

          <div>
          {/* // <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> */}
            {/* <Stock option={option} user={user}></Stock> */}
            {/* <SearchBar argument={aa} user={user}></SearchBar> */}
            {/* {alert(option.ownStock.length)} */}
            {/* <SearchBar ownStock={option.ownStock} history={option.history}></SearchBar> */}
            {/* <Home user={user} account={account} performs={performs}></Home> */}
            <Deposit user={user}></Deposit>
        </div>
        );
      }
    
}



export default Test;