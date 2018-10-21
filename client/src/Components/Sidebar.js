import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar">
                <Link to="/overview" style={{ textDecoration: 'none' }}>
                    <button className="Overview nav">
                        Overview
                    </button>
                </Link>
                <Link to="/map" style={{ textDecoration: 'none' }}>
                    <button className="Map nav" onClick={this.props.onClick}>
                        Map
                    </button>
                </Link>
                <Link to="/skillpoints" style={{ textDecoration: 'none' }}>
                    <button className="Skillpoints nav">
                        Skillpoints
                    </button>
                </Link>
                <Link to="/factories" style={{ textDecoration: 'none' }}>
                    <button className="Factories nav">
                        Factories
                    </button>
                </Link>
                <Link to="/inbox" style={{ textDecoration: 'none' }}>
                    <button className="Inbox nav">
                        Inbox
                    </button>
                </Link>
            </div>
        );
    }
}

export default Sidebar;