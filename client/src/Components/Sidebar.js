import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Sidebar.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar">
                <Link to="/main">
                    <button className="MainButton">
                        Main
                    </button>
                </Link>
                <Link to="/map">
                    <button className="MapButton">
                        Map
                    </button>
                </Link>
                <Link to="/skillpoints">
                    <button className="SkillpointsButton">
                        Skillpoints
                    </button>
                </Link>
                <Link to="/factories">
                    <button className="FactoriesButton">
                        Factories
                    </button>
                </Link>
                <Link to="/inbox">
                    <button className="InboxButton">
                        Inbox
                    </button>
                </Link>
            </div>
        );
    }
}

export default Sidebar;