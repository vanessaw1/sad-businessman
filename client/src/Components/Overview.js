import React from 'react';
import '../Styles/Overview.css';
import Chart from 'chart.js';

Chart.defaults.global.responsive = false;



var chartOptions = {
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - Whether the line is curved between points
    bezierCurve: true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.4,
    //Boolean - Whether to show a dot for each point
    pointDot: true,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit 
    //detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,
    //Boolean - Whether to horizontally center the label and point dot inside the grid
    offsetGridLines: false
};

var LineChart = require("react-chartjs").Line;

class Overview extends React.Component {
    render() {
        const labels = ["15 day ago", "14 days ago", "13 days ago", "12 days ago", "11 days ago", "10 days ago", 
            "9 days ago", "8 days ago", "7 days ago", "6 days ago", "5 days ago", "4 days ago", "3 days ago", 
            "2 days ago", "1 day ago", "Today"];
        var chartData1 = {
            labels: labels,
            datasets: [
                {
                    label: "Money/day",
                    fillColor: "rgba(255,255,0,0.2)",
                    strokeColor: "rgba(255,255,0,1)",
                    pointColor: "rgba(255,255,0,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(255,255,0,1)",
                    data: this.props.moHistory
                }
            ]
        };
        var chartData2 = {
            labels: labels,
            datasets: [
                {
                    label: "Reputation/day",
                    fillColor: "rgba(255,20,147,0.2)",
                    strokeColor: "rgba(255,20,147,1)",
                    pointColor: "rgba(255,20,147,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(255,20,147,1)",
                    data: this.props.reHistory
                }
            ]
        };
        var chartData3 = {
            labels: labels,
            datasets: [
                {
                    label: "Destruction/day",
                    fillColor: "rgba(255,255,255,0.2)",
                    strokeColor: "rgba(255,255,255,1)",
                    pointColor: "rgba(255,255,255,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(255,255,255,1)",
                    data: this.props.deHistory
                }
            ]
        };
        return (
            <div className="OverviewContent">
                <div>
                    Here is an overview of your company:
                </div>
                <table className="StatsTable">
                    <tr>
                        <th className="Money">{"Money/day: " + Math.round(this.props.money * 10000) / 10000}</th>
                        <th className="Reputation">{"Reputation/day: " + Math.round(this.props.reputation * 10000) / 10000}</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="Money" >
                                <LineChart data={chartData1} options={chartOptions} width="600" height="400" />
                            </div>
                        </td>
                        <td>
                            <div className="Reputation" >
                                <LineChart data={chartData2} options={chartOptions} width="600" height="400" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th className="Destruction">{"Destruction/day: " + Math.round(this.props.money * 10000) / 10000}</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="Destruction" >
                                <LineChart data={chartData3} options={chartOptions}  width="600" height="400" />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Overview;
