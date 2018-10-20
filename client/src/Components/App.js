import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Main from './Main.js'
import WorldMap from './WorldMap.js';
import Skillpoints from './Skillpoints.js';
import Factories from './Factories.js';
import Inbox from './Inbox.js';
// import '../GameState.js';
import '../Styles/App.css';
import '../Styles/Sidebar.css';
// import GameState from "./GameState.js"

import event from '../event.json';

const moneEvent = event[0];
const repuEvent = event[1];
const effiEvent = event[2];

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header money={10} factories={10} reputation={10} destruction={10}/>
                    <Sidebar/>
                    <div className="Content">
                        <Route path="/main" render={(props) => <Main money={10} factories={10} reputation={10} destruction={10}/>} />
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