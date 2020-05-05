import React from 'react';
// import logo from './logo.svg';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
// import Table from './component/Table'
import Stock from './component/Stock/Stock'
import Header from './component/Header/Header'
import Register from './component/User/Register'
import Test from './component/Stock/Test'


function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Header}/>
            <Route exact path='/stock' component={Stock}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/test' component={Test}/>
        </Switch>
    </BrowserRouter>
</React.Fragment>
  );
}

export default App;
