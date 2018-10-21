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
        var chartData = {
            labels: ["Today", "1 day ago", "2 days ago", "3 days ago", "4 days ago", "5 days ago", "6 days ago", 
                    "7 days ago", "8 days ago", "9 days ago", "10 days ago", "11 days ago", "12 days ago", "13 days ago", 
                    "14 days ago", "15 day ago"],
            datasets: [
                {
                    label: "Money/day",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.props.money
                },
                {
                    label: "Reputation/day",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: this.props.reputation
                },
                {
                    label: "Destruction/day",
                    fillColor: "rgba(122, 45, 86,0.2)",
                    strokeColor: "rgba(122, 45, 86,1)",
                    pointColor: "rgba(122, 45, 86,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(122, 45, 86,1)",
                    data: this.props.destruction
                }
            ]
        };
        return (
            <div className="OverviewContent">
                <div>
                    Here is an overview of your company:
                </div>
                <table className="AvgStats">
                    <tr className="head">Money/day</tr>
                    <tr>${Math.round(this.props.money[0] * 10000) / 10000}</tr>
                    <tr className="head">Reputation/day</tr>
                    <tr>{Math.round(this.props.reputation[0] * 10000) / 10000}</tr>
                    <tr className="head">Destruction/day</tr>
                    <tr>{Math.round(this.props.destruction[0] * 10000) / 10000}</tr>    
                </table>
                <div className="line" >
                    <LineChart data={chartData} options={chartOptions}
                        width="800" height="400" />
                </div>

            </div>
        )
    }
}

export default Overview;
