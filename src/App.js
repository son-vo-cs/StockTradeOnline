import React from 'react';
// import logo from './logo.svg';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
// import Table from './component/Table'
import Stock from './component/Stock/Stock'
import Header from './component/Header/Header'
import Register from './component/User/Register'
import Test from './component/Stock/Test'
import Login from "./component/User/Login"
import Home from "./component/User/Home"
import Buy from "./component/Transaction/Buy"
import Sell from "./component/Transaction/Sell"
import Card from "./component/Transaction/Card"
import Deposit from "./component/Transaction/Deposit"
import WithDraw from "./component/Transaction/WithDraw"
import SearchBar from "./component/Stock/SearchBar"

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Header}/>
            <Route exact path='/stock' component={Stock}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/test' component={Test}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/buy' component={Buy}/>
            <Route exact path='/sell' component={Sell}/>
            <Route exact path='/search' component={SearchBar}/>
            <Route exact path='/deposit' component={Deposit}/>
            <Route exact path='/withdraw' component={WithDraw}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/home' component={Card}/>
            
        </Switch>
    </BrowserRouter>
</React.Fragment>
  );
}

export default App;
