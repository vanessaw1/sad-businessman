import React from 'react';
import '../Styles/Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <div>
                    These are all of your stats
                </div>
                <table>
                    <tr>
                        <th>Money</th>
                        <th>Factories</th>
                        <th>Reputation</th>
                    </tr>
                    <tr>
                        <th>{this.props.money}</th>
                        <th>{this.props.factories}</th>
                        <th>{this.props.reputation}</th>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Main;