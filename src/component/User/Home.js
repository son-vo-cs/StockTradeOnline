import React, { Component } from 'react'
import logo from "./logo1.png"
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Home.scss'
import { style } from 'glamor';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import SearchBar from '../Stock/SearchBar'
import Stock from '../Stock/Stock'
import { Container, Row, Col } from 'reactstrap';

class Home extends Component
{
    constructor(props) {
        super(props);
        this.hoverStyle = this.hoverStyle.bind(this);
        this.state =
        {
            userName: "Son",
            userStatus: 'Login',
            open: false,
            data: {"Michael": "Mi ly", "MSFT": "Microsoft Inc", "MA": "Mama"},
            fund: 100,
            ownStock: ["SPY","AAPL"],
            account:
                {symbol: "SPY",
                showButs: false,
                showTitle: true,
                prices: [1,2,3],
                dates: ['2011','2012','2013'],
                width: 600,
                height: 300,
                size: 'med'
                
            },

            stock:
                {symbol: "",
                showButs: false,
                showTitle: true,
                prices: [1,2,3],
                dates: ['2011','2012','2013'],
                width: 600,
                height: 300,
                size: 'small'}
        };


    }

    
    


    handleOpen = () =>
    {
        if (this.state.userStatus === 'Login')
        {
            this.setState({open:true})
        }
    }

    handleClose = (login = false) => {

        let userStatus = 'Login';
        if (login) {
            userStatus = 'User Profile';
        }
        this.setState({
            userStatus,
            open: false
        });
    };

    hoverStyle(txtColorOff, bgColorOff, txtColorOn, bgColorOn)
    {
        return style({borderRadius: 10,padding: 10,margin:15,flexWrap:'wrap',backgroundColor: bgColorOff, color:txtColorOff,transition: "all ease .5s",fontWeight: 'bold',alignItems: 'center', textAlign:'center',
        
         ":hover": { cursor: "pointer", borderRadius: 5,backgroundColor: bgColorOn, color: txtColorOn ,fontWeight: 'bold'} });
    }

    render()
    {
        let theStyle = style({  flex: 1,margin: 'auto',
            width: '50%',
            textAlign:"center",
            alignItems: 'center',borderRadius: 5,backgroundColor: "#aaaaaa",color:"red",transition: "all ease .5s", ":hover": { cursor: "pointer",textDecorationLine: 'underline', backgroundColor: "#ffff9b", color: "green" } });
        

            var option = 
      {
        symbol: "SPY",
        showButs: true,
        showTitle: true,
        prices: [1500],
        dates: ['2020-05-08'],
        width: 600,
        height: 300,
        size: 'small',
        
        showPerformance: false
        


        

        
      }
        return(
          <div>
              
              <Navbar>
                  
                <img src={logo} width="30" alt="Casual Jacket"/>
                <SearchBar style={{position:"fixed"}} argument={this.state}></SearchBar>
                  <Nav className="ml-auto" style={{width:"30%"}} >
                  
                      {/* <Nav.Link {...this.hoverStyle("#218a67","white","white","#218a67")} onClick={this.handleOpen}>{this.state.userStatus}</Nav.Link> */}
                      <div className="user-name">{this.state.userName}</div>
                      <DropdownButton id="dropdown-basic-button" title="Action">
                        <Dropdown.Item href="#/action-1">Deposit</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Withdraw</Dropdown.Item>
                    </DropdownButton>
                    <div className="user-name">Log out</div>
                  </Nav>
              </Navbar>
              
              {/* <h1 className="ml-auto" style={{width:"76%"}}>Stock Trade</h1>  */}
                <div>
                    <div className="home-wrapper">
                        <div>
                            <p className="stocktrade">Investing</p>
                            <Stock option={option}></Stock>
                        </div>
                        
                    </div>

                    {/* {this.state.ownStock.map( (stock) =>  <div>
                        <hr></hr>
                        <div className="small-graph" onClick={(e)=> alert("haha")}>
                            <Row>

                                <h1 className="first-col">Title</h1>
                                <div className="second-col"><Stock option={getOptionGraph(stock,false,undefined,undefined,undefined,600,300,'small')}></Stock></div>
                            </Row>
                        </div>
                        <hr></hr>
                    </div>)}
                     */}
                </div>
          </div>

        );
    }
}

function getOptionGraph( 
      symbol = "",
      showButs = false,
      showTitle = true,
      prices = [1,2,3],
      dates = ['2011','2012','2013'],
      width = 600,
      height =  300,
      size=  'small'
    )
{
    var option = 
    {
      symbol: symbol,
      showButs: showButs,
      showTitle: showTitle,
      prices: prices,
      dates: dates,
      width: width,
      height: height,
      size: size
    }
    return option
}







export default Home