import React, {Component} from 'react';
import './SearchBar.scss'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Select from 'react-select'
// import "./Buy.scss";
import ReactSearchBox from 'react-search-box'
import {companies} from './Companies'
import Login from '../User/Login'
import Modal from '@material-ui/core/Modal';
import Stock from '../Stock/Stock'
import { Redirect } from 'react-router-dom';

class SearchBar extends React.Component  {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            data:{
            },
            typedText: "",
            options: [],
            open: false,
            modalActive: false,
            modalSymbol:""
            
        }
    }
    componentDidMount(){
        // this.setState({data: this.props.argument.data});
        

        // fs.readFile('companies.txt', 'utf8', function(err, contents) {
        // const lines = contents.split(/\r?\n/);
        // var option = [];
        // for (var i = 0; i < lines.length; i++)
        // {
        //     var items = lines[i].split("\t");
        //     var label = items[2] + ": " + items[1];
        //     option.push({label:label});
        // }
        // this.setState({options:option});
        // alert(companies.length)

        // });
         
        
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
    renderRedirect = () => {
        if (this.state.modalActive) {

          return <Redirect  to={{
            pathname: "/login",
            state: { test:"haha" }
          }}
        />
        }
      }
    handleDrop = selectOption =>
    {
        var items = selectOption.label.split(":");
        this.setState({open:true, modalActive: true, modalSymbol:items[0]}) 
        
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
        options={companies}
        openMenuOnClick={false}
        hideSelectedOptions={false}
      />
      {/* {alert(this.state.modalSymbol)} */}
      {this.renderRedirect()}
      
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

function getOptionGraph( 
    symbol = "",
    showButs = false,
    showTitle = true,
    prices = [1,2,3],
    dates = ['2011','2012','2013'],
    width = 600,
    height =  300,
    size=  'small',
    showPerformance= false,
    history = [],
    showAccount = false,
    fund = 0,
    ownStock=[]
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
    size: size,
    showPerformance: showPerformance,
    history: history,
    showAccount: showAccount,
    fund: fund,
    ownStock: ownStock
  }
  return option
}