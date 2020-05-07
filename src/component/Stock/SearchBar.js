import React, {Component} from 'react';
// import "./Buy.scss";
class SearchBar extends React.Component  {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            "AAPL": "Apple",
            "Apple": "AAPL",
            "MSFT": "Microsoft Inc",
            "Microsoft Inc": "MSFT",
            arr: []
        }
    }
    componentDidMount(){
        // this.setState({arr: this.props.argument.list});
        
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
                <h1>{this.state.arr[0]}</h1>
                <input type="text" value={"haha"}></input>
            </div>


        );}
};

export default SearchBar;