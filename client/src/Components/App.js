import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Overview from './Overview.js'
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
    constructor(props) {
        super(props);
    }
    sum(f) {
        const v = Math.round((f.asia + f.na + f.sa + f.pacific + f.africa + f.eu) * 100)/100;
        return v;
    }
    render() {
        const sc = this.props.scores;
        const pc = this.props.percentage;
        const f = this.props.factories;
        const destructionSum = this.sum(pc);
        const factorySum = this.sum(f);
        return (
            <div> 
            <Router>
                <div>
                    <Header money={sc.money} factories={factorySum} reputation={sc.reputation} destruction={destructionSum} />
                    <Sidebar />
                    <div className="Content">
                        <Route path="/overview" render={(props) => 
                            <Overview money={10} factories={10} reputation={10} destruction={10} />} />
                        <Route path="/map" component={WorldMap} />
                        <Route path="/skillpoints" component={Skillpoints} />
                        <Route path="/factories" component={Factories} />
                        <Route path="/inbox" component={Inbox} />
                    </div>
                </div>
            </Router>
            </div>
        );
    }
}

export default App;