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
        this.setState({title: Object.keys(this.state.cards)[0] + " " + this.state.cards[Object.keys(this.state.cards)[0]]});
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
        // this.state.title = tit;
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
                                    <div className="text-align2">
                                        <h5>Enter Amount</h5>
                                    </div>
                                </Col>
                                
                                <Col>
                                    <input type="text" className="field-style" pattern="[0-9]*" name="amount" onChange={this.handleChange} />
                                </Col>
                                
                        </Row>
                        <Row className="bottom">
                            
                                <Col>
                                    <div className="text-align">
                                        <h5>Choose Your Card</h5>
                                    </div>
                                </Col>
                                <Col>
                                    
                                    <DropdownButton  id="dropdown-menu" title={this.state.title}>
                                        {
                                            Object.entries(this.state.cards).map( ([key,val]) => 
                                                <Dropdown.Item id="dropdown-item"  onClick={(e)=> this.handleClick(key + " " + val)}>{key + " " + val}</Dropdown.Item>
                                            )
                                        }
                                    </DropdownButton>
                                </Col>
                                
                        </Row>
                       
                        <input type="submit" name="deposit" value="Deposit to StockTrade"/>

                        {/* <a href="/register">Don't have an account? Signup here</a> */}
                    </form>
                </div>


                <div>
                </div>


            </div>




        );}
};

export default Card;