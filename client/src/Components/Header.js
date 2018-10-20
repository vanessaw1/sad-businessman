import React from 'react';
import Login from './Login.js'

class Header extends React.Component {
    render() {
        return (
            <div className = "Header">
                <div className = "Stats">
                    Money: {this.props.money}
                    Factories:  {this.props.factories}
                    Reputation:  {this.props.reputation}
                </div>
                <span className = "SpeedControl">
                    <input type="radio" name="pause" />
                    <input type="radio" name="1x" />
                    <input type="radio" name="2x" />
                </span>
                <div className="Login">
                    {Login}
                </div>
                
            </div>
        );
    }
}

export default Header;