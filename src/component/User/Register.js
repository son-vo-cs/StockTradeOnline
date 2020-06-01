import React from 'react';
import "./Register.css";
import logo from "./logo1.png";
import { Container, Row, Col } from 'reactstrap';
import ApiService from '../Api/ApiService';


class Register extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            validEmail: false,
            textValid: "Click to Check Email",
            validPass: false,
            clickCheck: false,
            email: ""
        }
    }

    handleSubmit = (event,props) => {
        event.preventDefault();
    let body = {
        firstname: event.target.fname.value,
        lastname: event.target.lname.value,
        email: event.target.email.value,
        password: event.target.password.value,
    };

    


    

    if (body.password === event.target.cPassword.value) {
        // userService.userRegister(JSON.stringify(body)).then((data) => {
        //    // console.log(data);
        //     console.log(props,"myprops")
        //     alert('Register Succeed')
        //     props.history.push('/')
        // }).catch((error) => {
        //     alert(error.message);
        // });


    } else {
        alert('Sorry, the passwords are not same.')
    }

    };

    checkEmail = (event) => {
        event.preventDefault();
        
        // alert(this.state.email);

        alert(Host.host+"/hah")
    
    }

    typeEmail = (e) => {
        e.preventDefault();
        this.setState({email:e.target.value});
    
    }

    render() {
        return (
            
                <div className="container">
                    <div className="register-header">
                        <img className="rounded mx-auto d-block" src={logo}/>
                        <h1>StockTrade</h1>
                    </div>

                    <div className="register-box">
                        <h2>New User Information</h2>
                        <h6>Please fill in the information below: </h6>

                        <form onSubmit={(event) => this.handleSubmit(event,this.props)}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name<span className="text-danger">*</span></label>
                                <input type="text" name="fname" required
                                    placeholder="First Name" className="form-control" id="fname"style={{width:850}} onChange={(e)=>this.typeEmail(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name<span className="text-danger">*</span></label>
                                <input type="text" name="lname" required
                                    placeholder="Last Name" className="form-control" id="lname" style={{width:850}}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailAddress">Email<span className="text-danger">*</span></label>
                                <Row>
                                <div>
                                    <Row>
                                    <div><input type="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    placeholder="Email" className="form-control" style={{width:850, marginLeft: 30}} id="email"/></div>
                                <div>
                                    <label className={this.state.clickCheck === false ? "normal-email" : 
                                        this.state.validEmail === true ? "valid-email" : "invalid-email"} onClick={(e) => this.checkEmail(e)}>
                                        {this.state.clickCheck === false ? this.state.textValid : 
                                        this.state.validEmail === true ? "Email is available." : <div>Email already exists <br/> {this.state.textValid}</div>}
                                    </label>
                                </div>
                                        
                                    </Row>   
                                </div>
                                </Row>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass1">Password<span className="text-danger">*</span></label>
                                <input type="password" name="password" required
                                    placeholder="Password" className="form-control" id="password"style={{width:850}}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passWord2">Confirm Password <span className="text-danger">*</span></label>
                                <input type="password" required name='cPassword'
                                    placeholder="Password" className="form-control" id="cPassword"style={{width:850}}/>
                            </div>



                            <div className="form-group submitbutton">
                                <input type='submit' name='Submit' value="Create Account" className="btn btn-danger" style={{backgroundColor:"#2fcf9a"}}/>
                            </div>
                        </form>
                    </div>
                    
                
            </div>);
    };

}

export default Register;