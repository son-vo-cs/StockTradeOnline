import React, {Component} from 'react';
import "./Buy.scss";
import { Container, Row, Col } from 'reactstrap';
import { left } from 'glamor';

class Buy extends React.Component  {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            ticket: "SPY",
            fund: 0,
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
                    <h1>Buy {this.state.ticket}</h1>
                    <h5 className={this.state.fund >= this.state.cost ? "valid-value" : "invalid-value"}>(${this.state.fund} Available)</h5>
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
                                        <h5>Estimated Cost </h5>
                                    </div>
                                </Col>
                                <Col><h5 className={this.state.fund >= this.state.cost ? "valid-value" : "invalid-value"}>${this.state.cost}</h5></Col>
                        </Row>
                       
                        <input type="submit" name="" value="Place Order"/>

                        {/* <a href="/register">Don't have an account? Signup here</a> */}
                    </form>
                </div>
            </div>


        );}
};

export default Buy;