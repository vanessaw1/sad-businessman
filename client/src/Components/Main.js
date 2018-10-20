import React from 'react';
import '../Styles/Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <div>
                    Here is an overview of your company
                </div>
                <table className="Stats">
                    <tr>
                        <th>Money</th>
                        <th>Factories</th>
                        <th>Reputation</th>
                        <th>Destruction</th>
                    </tr>
                    <tr>
                        <th>{this.props.money}</th>
                        <th>{this.props.factories}</th>
                        <th>{this.props.reputation}</th>
                        <th>{this.props.destruction}</th>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Main;