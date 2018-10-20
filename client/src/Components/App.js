import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './Main.js'
import Header from './Header.js'
import Login from './Login.js';
import WorldMap from './WorldMap.js';
import Skillpoints from './Skillpoints.js';
import Factories from './Factories.js';
import Inbox from './Inbox.js';
import '../GameState.js';
import '../Styles/App.css';
// import GameState from "./GameState.js"

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="Header">
                        {Header}
                    </div>
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
                    <div className="Content">
                        <Route path="/login" component={Login} />
                        <Route path="/main" render={(props) => <Main money={10} factories={10} reputation={10}/>} />
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

export default App;
