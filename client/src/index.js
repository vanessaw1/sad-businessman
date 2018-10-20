import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WorldMap from './WorldMap.js';
import Skillpoints from'./Skillpoints.js';
import Factories from './Factories';
import Inbox from './Inbox';
import './GameState';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div>
                        <Link to="/main">
                            <button>   
                                Main
                            </button>
                        </Link>
                        <Link to="/map">
                            <button>   
                                Map
                            </button>
                        </Link>
                        <Link to="/skillpoints">
                            <button>   
                                Skillpoints
                            </button>
                        </Link>
                        <Link to="/factories">
                            <button>   
                                Factories
                            </button>
                        </Link>
                        <Link to="/inbox">
                            <button>   
                                Inbox
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Route path="/main" component={Main} />
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

class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div>
                        This is the main page
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
