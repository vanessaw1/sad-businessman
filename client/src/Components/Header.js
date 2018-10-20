import React from 'react';
import { Link } from "react-router-dom";
import Login from './Login.js'
import '../Styles/Header.css';
import logo from "../Resources/BRHF18.png";

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
                <div>
                    <Link to="">
                        <img className="Logo" src={logo}
                            alt="LOGO" width="50" height="100" />
                    </Link>
                </div>


            </div>
        );
    }
}

export default Header;