import React, { Component } from 'react'
import logo from "./logo1.png"
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Home.scss'
import { style } from 'glamor';


class Home extends Component
{
    constructor(props) {
        super(props);
        this.hoverStyle = this.hoverStyle.bind(this);

    }

    state =
    {
        userName: "Son",
        userStatus: 'Login',
        open: false,
    };

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

        return(
          <div>
              
              <Navbar>
                  <img className="rounded mx-auto d-block logo" src={logo} width="35" alt="Casual Jacket"/>
                  <Nav className="ml-auto" style={{width:"30%"}} >
                      {/* <Nav.Link {...this.hoverStyle("#218a67","white","white","#218a67")} onClick={this.handleOpen}>{this.state.userStatus}</Nav.Link> */}
                      <div {...this.hoverStyle("#2fcf9a","white","white","#2fcf9a")} onClick={this.handleOpen}>LOGIN</div>
                      <div {...this.hoverStyle("#2fcf9a","white","white","#2fcf9a")} onClick={()=>this.props.history.push('/stock')}>SIGN UP</div>
                  </Nav>
              </Navbar>
              
              {/* <h1 className="ml-auto" style={{width:"76%"}}>Stock Trade</h1>  */}
                
                <div className="home-wrapper">
                    <div className="home-container">
                        <div className="text-container">
                            <p className="stocktrade">StockTrade</p>
                            <p className="intro"> Free stock trading.
                            <br/>Stop paying comission fee for <br/> every trade<br/>
                            </p>
                            <p className="sub-intro">Start right now with StockTrade.<br/>
                            It takes less than 5 minitues for signing up!

                            </p>
                        </div>

                    </div>
                </div>
          </div>

        );
    }
}







export default Home