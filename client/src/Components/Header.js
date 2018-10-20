import React from 'react';
import Login from './Login.js'
import '../Styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className = "Header">
                <div className = "Stats">
                    Money: {this.props.money}
                    Factories:  {this.props.factories}
                    Reputation:  {this.props.reputation}
                    Destruction: {this.props.destruction}
                </div>
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