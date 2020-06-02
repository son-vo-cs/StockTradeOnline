import React, {Component} from 'react';
import "./Card.scss";
import { Container, Row, Col } from 'reactstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { left } from 'glamor';
import ApiService from '../Api/ApiService';


const request = async () => {
    alert("htuiuti");
    const response = await fetch('http://localhost:8080/api/v1/countries');
    const json = await response.json();
    alert(json);
}

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

    test(e)
    {
        e.preventDefault();
        alert("ssssssshash");
        const fetch = require("node-fetch");
        let url = 'http://localhost:8080/api/v1/countries';
        fetch(url,
            {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }),
                credentials: 'same-origin',
                crossDomain:true,
                mode: 'cors'
            }).then((resp) => {
            if (!resp.ok) {
                alert("resp");
                throw Error('User already exists');
            }
            return resp.json();
        }).then((content) =>{
            alert("haha");
            alert(content);
        }).catch((error) => {
             alert(error.message);
            });


        // let headers = new Headers();

        // headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'application/json');
        // headers.append('Origin','http://localhost:3000');
    
        // fetch(url, {
        //     mode: 'cors',
        //     credentials: 'include',
        //     method: 'GET',
        //     headers: headers
        // })
        // .then(response => response.json())
        // .then(json => alert(json))
        // .catch(error => alert('Authorization failed : ' + error.message));


//         axios.get(url)
//   .then((response) => {
//     // handle success
//     console.log(response);
//     alert("hashasds");
//   })
//   .catch((error) => {
//     // handle error
//     alert("tententen")
//     alert(error);
//   })    
        // request();
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
                                        <h5>Credit Card Number: </h5>
                                    </div>
                                </Col>
                                
                                <Col>
                                    <input type="text" className="field-style" pattern="[0-9]*" name="amount" onChange={this.handleChange} />
                                </Col>
                                
                        </Row>
                        <Row className="bottom">
                            
                                <Col>
                                    <div className="text-align2">
                                        <h5>Card's Name: </h5>
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
                       
                        <input type="submit" name="deposit" value="Add a New Card" onClick={(e)=>this.test(e)}/>

                        {/* <a href="/register">Don't have an account? Signup here</a> */}
                    </form>
                </div>


                <div>
                </div>


            </div>




        );}
};

export default Card;