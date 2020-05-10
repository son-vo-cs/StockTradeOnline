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
        console.log(this.props,"innner")
        return (
            <div>
                <h1>Buy {this.state.ticket}</h1>
                <label htmlFor="Search"> search me</label>
                <input type="text" value={"haha"}></input>
            </div>


        );}
};

export default Buy;