import React, {Component} from 'react';
import "./Sell.scss";
import { Container, Row, Col } from 'reactstrap';
import { left } from 'glamor';

class Sell extends React.Component  {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            ticket: "SPY",
            sharesAvail: 0,
            price: 240.3,
            cost:0,
            shares:0
        }
    }
    componentDidMount()
    {

    }
    handleSubmit = (event,closeModal) => {
        event.preventDefault();
        // let body = {
        //     email: event.target.email.value,
        //     password: event.target.psw.value
        // };

        // alert(body.email);
        if (this.state.fund < this.state.cost)
        {
            alert("You don't have enough fund to place this order!!");
        }

    };

    handleChange = (event) => {
        this.setState({shares: event.target.value, cost: event.target.value*this.state.price});

    };

    render(){
        return (
            <div>
                <div className="loginbox">
                    <h1>Sell {this.state.ticket}</h1>
                    <h5 className={this.state.sharesAvail >= this.state.shares ? "valid-value" : "invalid-value"}>(You own {this.state.sharesAvail} Shares)</h5>
                    <form onSubmit={(event) => this.handleSubmit(event,this.props.closeModal)}>
                        <Row className="bottom">
                            
                                <Col>
                                    <div className="text-align">
                                        <h5>Number of Shares</h5>
                                    </div>
                                </Col>
                                
                                <Col>
                                    <input type="text" className="field-style" pattern="[0-9]*" name="shares" onChange={this.handleChange} />
                                </Col>
                                
                        </Row>
                        <Row className="bottom">
                            
                                <Col>
                                    <div className="text-align">
                                        <h5>Market Price </h5>
                                    </div>
                                </Col>
                                <Col><h5>${this.state.price}</h5></Col>
                                
                        </Row>
                        <Row className="bottom">
                            
                                <Col>
                                    <div className="text-align">
                                        <h5>Estimated Credit </h5>
                                    </div>
                                </Col>
                                <Col><h5>${this.state.cost}</h5></Col>
                        </Row>
                       
                        <input type="submit" name="" value="Place Order"/>

                        {/* <a href="/register">Don't have an account? Signup here</a> */}
                    </form>
                </div>
            </div>


        );}
};

export default Sell;