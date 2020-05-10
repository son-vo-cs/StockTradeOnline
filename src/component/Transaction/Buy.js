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
            price: 240,
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
                        <Row className="bottom">
                            
                                <Col>
                                    <div className="text-align">
                                        <h5>Number of Shares</h5>
                                    </div>
                                </Col>
                                
                                <Col>
                                    <input type="text" className="field-style" pattern="[0-9]*" name="shares"  placeholder="0" required/>
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
                                <Col><h5>${this.state.price}</h5></Col>
                        </Row>
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