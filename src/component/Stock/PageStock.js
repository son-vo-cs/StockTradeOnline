import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Stock from './Stock'
import { Redirect } from 'react-router-dom';

class PageStock extends React.Component  {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            
            
        }
    }
  
 

   
    render(){
        return (

            <div>
            {/* // <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> */}
              {/* <Stock option={option}></Stock> */}
              {/* <SearchBar argument={aa} user={user}></SearchBar> */}
              {/* <Home user={user} account={account} performs={performs}></Home> */}
          </div>
          );
    }
}


export default PageStock;

