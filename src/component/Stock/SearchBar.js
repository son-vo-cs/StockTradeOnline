import React, {Component} from 'react';
// import "./Buy.scss";
class SearchBar extends React.Component  {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            data:{
                "AAPL": "Apple",
                "Apple": "AAPL",
                "MSFT": "Microsoft Inc",
                "Microsoft Inc": "MSFT",
            },
            typedText: ""
        }
    }
    componentDidMount(){
        this.setState({data: this.props.argument.data});
        
    }


    handleSubmit = (event,closeModal) => {
        event.preventDefault();
        let body = {
            email: event.target.email.value,
            password: event.target.psw.value
        };

        alert(body.email);

    };

    handleChange = (event) => {
        this.setState({typedText: event.target.value});

    };
    render(){
        return (
            <div>
                <label htmlFor="Search"> search me</label>
                    {
                        Object.entries(this.state.data).filter( ([key,val]) => {return this.state.typedText.length>=1 && (key.includes(this.state.typedText) || val.includes(this.state.typedText) )} ).map( ([key,val]) => <h1>{key}</h1> )
                    }
               
                <input type="text" value={this.state.typedText} onChange={this.handleChange}></input>
            </div>


        );}
};

export default SearchBar;