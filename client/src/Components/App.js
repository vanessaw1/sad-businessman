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
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div> 
                <h1>The businessman has money {this.props.scores}.</h1>
            <Router>
                <div>
                {/* <h1>The businessman has money event {this.props.events.money}.</h1> */}
                {/* <h1>The businessman is at stage {this.props.gameState}.</h1> */}
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
            </div>
        );
    }
}

export default App;