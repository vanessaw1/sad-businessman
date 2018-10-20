import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './Main.js'
import Login from './Login.js';
import WorldMap from './WorldMap.js';
import Skillpoints from './Skillpoints.js';
import Factories from './Factories';
import Inbox from './Inbox';
import './GameState';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
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
                    <div>
                        <Route path="/login" component={Login} />
                        <Route path="/main" component={Main money={10} factories={10} reputation={10}} />
                        <Route path="/map" component={WorldMap} />
                        <Route path="/skillpoints" component={Skillpoints} />
                        <Route path="/factories" component={Factories} />
                        <Route path="/inbox" component={Inbox} />
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
