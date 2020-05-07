import React, {Component} from 'react';
// import "./Buy.scss";
class SearchBar extends React.Component  {

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