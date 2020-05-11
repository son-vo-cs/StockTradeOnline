import React, {Component} from 'react';
import "./Deposit.scss";
import { Container, Row, Col } from 'reactstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { left } from 'glamor';

class Deposit extends React.Component  {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            ticket: "SPY",
            fund: 0,
            price: 240.3,
            cost:0,
            shares:0,
            title:"",
            cards: 
            {
                "Bank of America": "5024",
                "Chase": "2012"

            }
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount()
    {
        this.setState({title: Object.keys(this.state.cards)[0]});
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

    handleClick(tit){
        this.setState({title:tit});
    };


    render(){
        return (
            <div>
                <div className="loginbox">
                    <h1>Transfer to StockTrade</h1>
                    {/* <h5 className={this.state.fund >= this.state.cost ? "valid-value" : "invalid-value"}>(${this.state.fund} Available)</h5> */}
                    <form onSubmit={(event) => this.handleSubmit(event,this.props.closeModal)}>
                        <Row className="bottom">
                            
                                <Col>
                                    <div className="text-align">
                                        <h5>Enter Amount</h5>
                                    </div>
                                </Col>
                                
                                <Col>
                                    <input type="text" className="field-style" pattern="[0-9]*" name="shares" onChange={this.handleChange} />
                                </Col>
                                
                        </Row>
                        <Row className="bottom">
                            
                                <Col>
                                    <div className="text-align">
                                        <h5>Choose Your Card</h5>
                                    </div>
                                </Col>
                                <Col><h5>${this.state.price.toFixed(2)}</h5></Col>
                                
                        </Row>
                        <Row className="bottom">
                            
                                <Col>
                                    <div className="text-align">
                                        <h5>Estimated Cost </h5>
                                    </div>
                                </Col>
                                <Col><h5 className={this.state.fund >= this.state.cost ? "valid-value" : "invalid-value"}>${this.state.cost.toFixed(2)}</h5></Col>
                        </Row>
                       
                        <input type="submit" name="" value="Place Order"/>

                        {/* <a href="/register">Don't have an account? Signup here</a> */}
                    </form>
                </div>


                <div>
                <DropdownButton id="dropdown-basic-button" title={this.state.title}>
                    <Dropdown.Item style={{color: "red"}} href="#/action-1" onClick={this.handleClick}>Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			    </DropdownButton>
                </div>


            </div>




        );}
};

export default Deposit;