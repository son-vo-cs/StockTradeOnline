import React, {Component} from 'react';
import './SearchBar.scss'
import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Select } from 'react-select'
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
                {/* <label htmlFor="Search"> search me</label> */}
                
                <input type="text" value={this.state.typedText} placeholder="Search for Stocks" onChange={this.handleChange} className="searchBar"></input>
                    {
                        // Object.entries(this.state.data).filter( ([key,val]) => 
                        // {return this.state.typedText.length>=1 && (key.includes(this.state.typedText) || val.includes(this.state.typedText) )} )
                        // .map( ([key,val]) => <h1>{key}</h1> )
                        // filterSearch(this.state.data, this.state.typedText).map(([key,val]) => <h1>{key}</h1>)
                        <div className="over-flow">
                       {
                        filterSearch(this.state.data, this.state.typedText).map( key =>
                            <div> <h1 className="itemSearch">{key}<br/>{this.state.data[key]}</h1></div>)
                        }
                        </div>
                    
                    }
                    <div>hahsdh</div>
                    <h1>sahdjashjdhasjhdja</h1>
                    <div>
  {/* <Select
    // value={selectedOption}
    options={this.state.data}
    onChange={this.handleChange}
    placeholder= "Search..."
    openMenuOnClick={false}
  /> */}
 </div>
                    <h1>sahdjashjdhasjhdja</h1>
                {/* <h1 className="itemSearch">tustutu<br/>haha</h1> */}
            </div>


        );}
};

function filterSearch(data, typeText)
{
    typeText = typeText.toLowerCase();
    var symbols = [];
    Object.entries(data).map( ([key,val]) => 
        {
            var lowKey = key.toLowerCase();
            var lowVal = val.toLowerCase();
            if (typeText.length>=1 && (lowKey.includes(typeText) || lowVal.includes(typeText) ))
                symbols.push(key);
        })
    return symbols.sort();
                        
}

export default SearchBar;