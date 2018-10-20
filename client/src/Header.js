import React from 'react';
import Login from './Login.js'

class Header extends React.Component {
    render() {
        return (
            <div className = "Header">
                {Login}
            </div>
        );
    }
}

export default Header;