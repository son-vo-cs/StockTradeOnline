import React, {Component} from 'react';
// import "./Buy.scss";
class SearchBar extends React.Component  {

    constructor(props)
    {
        super(props);
        this.state = 
        {

        }
    }
    componentDidMount(){
        // this.setState(this.props.argument);
        
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
        console.log(this.props,"innner")
        return (
            <div>
                <label htmlFor="Search"> search me</label>
                <input type="text" value={"haha"}></input>
            </div>


        );}
};

export default SearchBar;