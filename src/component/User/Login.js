import React, {Component} from 'react';
import "./Login.scss";
// import {Redirect} from "react-router";
import ApiService from '../Api/ApiService';

class Login extends React.Component  {

    handleSubmit = (event,closeModal) => {
        event.preventDefault();
        let body = {
            email: event.target.email.value,
            password: event.target.psw.value
        };
        ApiService.login(body).then((data) => {
            if (data.valid === false)
            {
                alert("The user name or password is not correct!!");
            }
            else
            {
                alert(data.name);
            }
        });
        
    };
    render(){
        return (
            <div>
                {alert(this.props.location.state.test)}
                <div className="loginbox">
                    <h1 className>Login</h1>
                    <h6>Please enter your e-mail and password:</h6>
                    <form onSubmit={(event) => this.handleSubmit(event,this.props.closeModal)}>
                        <div className="inner-icon left-addon">
                            <span className="glyphicon glyphicon-user"/>
                            <input type="email" name="email" placeholder="Email" required/>
                        </div>
                        <div className="inner-icon left-addon">
                            <span className="glyphicon glyphicon-lock"/>
                            <input type="password" name="psw" placeholder="Password" required/>
                        </div>
                        <input type="submit" name="" value="Login"/>

                        <a href="/register">Don't have an account? Signup here</a>
                    </form>
                </div>

            </div>


        );}
};

export default Login;