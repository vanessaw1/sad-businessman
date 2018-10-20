import React from 'react';
import Login from './Login.js'
import '../Styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <table className="Stats">
                    <tr>
                        <th>{this.props.money}</th>
                        <th>{this.props.factories}</th>
                        <th>{this.props.reputation}</th>
                        <th>{this.props.destruction}</th>
                    </tr>
                    <tr>
                        <td>Money</td>
                        <td>Factories</td>
                        <td>Reputation</td>
                        <td>Destruction</td>
                    </tr>
                </table>
                {/* <div className="Stats">
                    {this.props.money}
                    {this.props.factories}
                    {this.props.reputation}
                    {this.props.destruction}
                </div> */}
                {/* <div className="StatsItems">
                    Money
                    Factories
                    Reputation
                    Destruction
                </div> */}
                {/* <span className = "SpeedControl">
                    <input type="radio" name="pause">
                        Pause
                    </input>
                    <input type="radio" name="1x">
                        1x
                    </input>
                    <input type="radio" name="2x">
                        2x
                    </input>
                </span> */}
                <div className="Login">
                    {Login}
                </div>

            </div>
        );
    }
}

export default Header;