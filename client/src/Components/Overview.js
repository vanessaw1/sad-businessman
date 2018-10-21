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
                    <tr>${Math.round(this.props.money * 10000) / 10000}</tr>
                    <tr className="head">Reputation/day</tr>
                    <tr>{Math.round(this.props.reputation * 10000) / 10000}</tr>
                    <tr className="head">Destruction/day</tr>
                    <tr>{Math.round(this.props.destruction * 10000) / 10000}</tr>
                </table>
            </div>
        )
    }
}

export default Overview;