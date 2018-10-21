import React from 'react';
import '../Styles/Overview.css';

class Overview extends React.Component {
    render() {
        return (
            <div className="OverviewContent">
                <div>
                    Here is an overview of your company
                </div>
                <table className="Stats">
                    <tr>
                        <th>Money/day</th>
                        <th>Reputation/day</th>
                        <th>Destruction/day</th>
                    </tr>
                    <tr>
                        <th>{this.props.money}</th>
                        <th>{this.props.reputation}</th>
                        <th>{this.props.destruction}</th>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Overview;