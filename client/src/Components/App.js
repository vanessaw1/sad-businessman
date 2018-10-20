import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Overview from './Overview.js'
import WorldMap from './WorldMap.js';
import Skillpoints from './Skillpoints.js';
import Factories from './Factories.js';
import Inbox from './Inbox.js';
import '../Styles/App.css';
import '../Styles/Sidebar.css';

import event from '../event.json';

// const moneEvent = event[0];
// const repuEvent = event[1];
// const effiEvent = event[2];

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    sum(f) {
        const v = Math.round((f.asia + f.na + f.sa + f.pacific + f.africa + f.eu) * 100) / 100;
        return v;
    }

    fetchEvent(e) {
        var eventList = [];
        for (var i = 0; i < e.length; i++) {
            if (e[i] !== -1) {
                eventList.push(event[i][e[i]]);
            }
        }
        return eventList;
    }

    render() {
        const sc = this.props.scores;
        const pc = this.props.percentage;
        const f = this.props.factories;
        const e = this.props.events;

        const destructionSum = this.sum(pc);
        const factorySum = this.sum(f);
        const skills = this.props.skills;
        const eventsList = this.fetchEvent(e);

        return (
            <div>
                <Router>
                    <div>
                        <Header money={this.props.scores.money}
                            factories={factorySum} reputation={sc.reputation} destruction={destructionSum} />
                        <Sidebar />
                        <div className="Content">
                            <Route exact path="/" component={Welcome} />
                            <Route path="/overview" render={(props) =>
                                <Overview money={sc.money} factories={factorySum}
                                    reputation={sc.reputation} destruction={destructionSum} />} />
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