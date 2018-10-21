import React from 'react';
import '../Styles/Overview.css';

class Overview extends React.Component {
    render() {
        return (
            <div className="OverviewContent">
                <div>
                    Here is an overview of your company:
                </div>
                <table className="AvgStats">
                    <tr className="head">Money/day</tr>
                    <tr>{this.props.money}</tr>
                    <tr className="head">Reputation/day</tr>
                    <tr>{this.props.reputation}</tr>
                    <tr className="head">Destruction/day</tr>
                    <tr>{this.props.destruction}</tr>
                </table>
            </div>
        )
    }
}

export default Overview;