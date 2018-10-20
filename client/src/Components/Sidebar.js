import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar">
                <Link to="/overview">
                    <button className="Overview nav">
                        Overview
                    </button>
                </Link>
                <Link to="/map">
                    <button className="Map nav">
                        Map
                    </button>
                </Link>
                <Link to="/skillpoints">
                    <button className="Skillpoints nav">
                        Skillpoints
                    </button>
                </Link>
                <Link to="/factories">
                    <button className="Factories nav">
                        Factories
                    </button>
                </Link>
                <Link to="/inbox">
                    <button className="Inbox nav">
                        Inbox
                    </button>
                </Link>
            </div>
        );
    }
}

export default Sidebar;