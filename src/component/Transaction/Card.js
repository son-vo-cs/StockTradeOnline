import React, {Component} from 'react';
import "./Card.scss";
import { Container, Row, Col } from 'reactstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { left } from 'glamor';

class Card extends React.Component  {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            ticket: "SPY",
            months: ["1","2","3","4","5","6","7","8","9","10","11","12"],
            years:["2020","2021","2022","2023","2024","2025","2026","2027"],
            pickmonth: "",
            pickyear:"",
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

    handleClickMonth(month)
    {
        alert(month)
        this.setState({pickmonth:month});    
    }

    handleClickYear(year)
    {
        this.setState({pickyear:year});    
    }


    render(){
        return (
            <div>
                <div className="loginbox">
                    <h1>Add a New Card</h1>
                    {/* <h5 className={this.state.fund >= this.state.cost ? "valid-value" : "invalid-value"}>(${this.state.fund} Available)</h5> */}
                    <form onSubmit={(event) => this.handleSubmit(event,this.props.closeModal)}>
                        <Row className="bottom">
                            
                                <Col>
                                    <div className="text-align2">
                                        <h5>Enter Your Credit Card Number: </h5>
                                    </div>
                                </Col>
                                
                                <Col>
                                    <input type="text" className="field-style" pattern="[0-9]*" name="amount" onChange={this.handleChange} />
                                </Col>
                                
                        </Row>
                        <Row className="bottom">
                            
                                <Col>
                                    <div className="text-align">
                                        <h5>Expiration Date</h5>
                                    </div>
                                </Col>
                                <Col>
                                    
                                    <DropdownButton  id="dropdown-menu" title={this.state.pickmonth}>
                                        {
                                            this.state.months.map( element => 
                                                <Dropdown.Item id="dropdown-item"  onClick={(e)=> this.handleClickMonth(element)}>{element}</Dropdown.Item>
                                            )
                                        }
                                    </DropdownButton>
                                </Col>
                                <Col>
                                    
                                    <DropdownButton  id="dropdown-menu" title={this.state.pickyear}>
                                        {
                                            this.state.years.map( element => 
                                                <Dropdown.Item id="dropdown-item"  onClick={(e)=> this.handleClickYear(element)}>{element}</Dropdown.Item>
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