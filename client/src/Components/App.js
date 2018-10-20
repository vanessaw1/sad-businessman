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
// import event from '../event.json';

// const moneEvent = event[0];
// const repuEvent = event[1];
// const effiEvent = event[2];

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div> 
            <Router>
                <div>
                    <Header money={this.props.scores.money} factories={10} reputation={10} destruction={10} />
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