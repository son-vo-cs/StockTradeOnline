import React, { Component } from 'react'

import {Line} from 'react-chartjs-2';
import { withWindowSizeListener } from 'react-window-size-listener';


class DrawChart extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            datasets: [
                {
                    label: 'Rainfall',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'blue',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56],
                    
                    
                }
            ],
            temp: null
        };
        this.getTableSize = this.getTableSize.bind(this);
    }

    setView(days, tempData)
    {
        if (days == 7)
        {
            this.setState(
                {
                    labels: tempData.datesWeek,
                    datasets: [
                        {
                            label: "",
                            data:tempData.pricesWeek,
                            borderColor: tempData.colorWeek,
                            backgroundColor: 'White'
                        }
                    ]
                }
            );
            return;
        }
        if (days == 30)
        {
            this.setState(
                {
                    labels: tempData.datesMonth,
                    datasets: [
                        {
                            label: "",
                            data:tempData.pricesMonth,
                            borderColor: tempData.colorMonth,
                            backgroundColor: 'White'
                        }
                    ]
                }
            );
            return;
        }
        this.setState(
            {
                labels: tempData.datesAll,
                datasets: [
                    {
                        label: "",
                        data:tempData.pricesAll,
                        borderColor: tempData.colorAll,
                        backgroundColor: 'White'
                    }
                ]
            }
        );
    }

    getTableSize(size)
    {
        var width = this.props.windowSize.windowWidth;
        var height = this.props.windowSize.windowHeight;
        switch(size)
        {
            case 'small':
                return [width*3/10,height*2/9];
            case 'med':
            return [width*3/8,height*2/7];
            default:
                return [width/2,height/3];
        }
    }


    handleClick(days, tempData)
    {
        this.setView(days,tempData);
        // this.setState(this.state);
    }

    render()
    {
        var tempData = this.props.arg.data;
        if (this.props.arg.displayDay == -1)
        {
            this.setView(-1,tempData);
            this.props.arg.displayDay = 7;
        }
        // this.setView(30,tempData);
        return(
            <div>
                {/* <h1>kakakkaka</h1> */}

                {/* <h1>{this.props.arg.temp}</h1> */}
                {/* <h1>huhu</h1> */}
                <h1 style={{display: (this.props.option.showTitle === true? "" : "none")}}>{this.props.option.symbol}</h1>
                <Line
                    data={this.state}
                    options={{
                        title:{
                            display:false,
                            text: tempData.displayDay,
                            fontSize:20,
                            position:'left'
                        },
                        legend:{
                            display:false,
                            position:'left'
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display:false
                                },
                                display:false
                            }],
                            yAxes: [{
                                gridLines: {
                                    display:false
                                }   
                            }]
                        },
                        maintainAspectRatio: true,
                        responsive:false,
                    // defaultFontSize:"14px",
                    // width:"800",
                    // height:"10",
                    }}
                    width={this.getTableSize(this.props.option.size)[0]} height={this.getTableSize(this.props.option.size)[1]}
                />
                <div className="Week-button" style={{display: (this.props.option.showButs === true? "block" : "none")}}>
                    <button
                        className="square" onClick={() => this.handleClick(7,tempData)}
                    >
                        {"7 Days"}
                    </button>
                    <button
                        className="Month-button" onClick={() => this.handleClick(30,tempData)}
                    >
                        {"1 Month"}
                    </button>
                    <button
                        className="All-button" onClick={() => this.handleClick(-1,tempData)}
                    >
                        {"All"}
                    </button>
                </div>

            </div>
        );
    }

};



export default withWindowSizeListener(DrawChart)
