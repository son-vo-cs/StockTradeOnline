import React, {Component} from 'react';
import './SearchBar.scss'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Select from 'react-select'
// import "./Buy.scss";
import ReactSearchBox from 'react-search-box'

var fs = require('fs');

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
            typedText: "",
            options: []
            
        }
    }
    componentDidMount(){
        // this.setState({data: this.props.argument.data});
        fs.readFile('companies.txt', 'utf8', function(err, contents) {
        const lines = contents.split(/\r?\n/);

        for (var i = 0; i < lines.length; i++)
        {
            var items = lines[i].split("\t");
            console.log(items[2] + ": " + items[1])
        }
        });
         
        
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
        // this.setState({typedText: event.target.value});
        // alert(event)

    };

    handleDrop = selectOption =>
    {
        alert(selectOption)
        alert(selectOption.value)
    }

    render(){
        
const options = [
    { label: 'B' },
    { label: 'AB' },
    { label: 'AA' },
  ];
        return (
            <div>
                {/* <label htmlFor="Search"> search me</label> */}
                
                <Select
        value={null}
        onChange={this.handleDrop}
        options={options}
        openMenuOnClick={false}
        hideSelectedOptions={false}
      />
                {/* <input type="text" value={this.state.typedText} placeholder="Search for Stocks" onChange={this.handleChange} className="searchBar"></input>
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
                        
                    
                    } */}


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

function compare(a, b) {
    return a.label > b.label ? 1 : b.label > a.label ? -1 : 0;
}


export default SearchBar;