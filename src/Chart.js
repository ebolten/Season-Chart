import React from 'react';
import Chart from "chart.js";

class SeasonChart extends React.Component {

    constructor(){
        super()
        this.chartReference = React.createRef();
    }

    componentDidMount() {
        const myChartRef = this.chartReference.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan","Feb","March","April","May","June","July","August","September","October","November","December"],
                datasets: [
                    {
                        label: "Spring",
                        data: [null,null,3,4,5,6,null,null,null,null,null,null],
                        fill: false,
                        borderColor: "DarkGreen",
                        backgroundColor:"DarkGreen"
                    },
                    {
                        label: "Summer",
                        data: [null,null,null,null,null,6,7,8,9,null,null,null],
                        fill: false,
                        borderColor: "Yellow",
                        backgroundColor:"Yellow"
                    },
                    {
                        label: "Fall",
                        data: [null,null,null,null,null,null,null,null,9,10,11,12],
                        fill: false,
                        borderColor: "Orange",
                        backgroundColor:"Orange"
                    },
                    {
                        label: "Winter",
                        data: [1,2,3,null,null,null,null,null,null,null,null,null,null],
                        fill: false,
                        borderColor: "SteelBlue",
                        backgroundColor:"SteelBlue"
                    }
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontColor: "Black",
                        fontSize: 15
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "Black",
                            fontSize: 13,
                            stepSize: 1,
                            suggestedMin:1,
                            // suggestedMax:100000,
                            beginAtZero: false
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "Black",
                            fontSize: 13,
                            // stepSize: 1000,
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }


    render(){
        return(
            <div id='data-box' >
                <br/><br/>
                <h3 style={{textAlign:'center'}} > All of the Seasons </h3>
                <br/>
                <canvas
                    id="my-chart"
                    ref={this.chartReference}
                />
            </div>
        )
    }
}
export default SeasonChart;