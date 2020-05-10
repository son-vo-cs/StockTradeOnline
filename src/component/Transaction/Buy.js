import React, {Component} from 'react';
import "./Buy.scss";

class Buy extends React.Component  {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            ticket: "SPY",
            fund: 0
        }
    }
    componentDidMount()
    {

    }
    handleSubmit = (event,closeModal) => {
        event.preventDefault();
        let body = {
            email: event.target.email.value,
            password: event.target.psw.value
        };

        alert(body.email);

    };
    render(){
        return (
            <div>
                <div className="loginbox">
                    <h1 className>Buy {this.state.ticket}</h1>
                    <form onSubmit={(event) => this.handleSubmit(event,this.props.closeModal)}>
                        <div className="row">
                            
                                <h6>Number of Shares</h6>
                                <div className="field-holder">
                                    <input type="text" className="field-style" pattern="[0-9]*" name="email" placeholder="Email" required/>
                                </div>
                                
                            
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

export default Buy;