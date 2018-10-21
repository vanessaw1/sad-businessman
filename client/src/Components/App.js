import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './Welcome.js'
import EventModal from './EventModal'
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Overview from './Overview.js'
import Skillpoints from './Skillpoints.js';
import Factories from './Factories.js';
import Login from './Login';
import '../Styles/App.css';
import '../Styles/Sidebar.css';

import event from '../event.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isShow: "inline" };
        this.show = this.show.bind(this);
    }

    sum(f) {
        const v = Math.round((f.asia + f.na + f.sa + f.pacific + f.africa + f.eu) * 100) / 100;
        return v;
    }

    fetchEvent(e) {
        var eventList = [];
        if (e.money !== -1) {
            eventList.push(event[0][e.money]);
        }
        if (e.reputation !== -1) {
            eventList.push(event[1][e.reputation]);
        }
        return eventList;
    }

    show(e) {
        alert("Please confirm")
        if (this.state.isShow === "inline") {
            alert("Please confirm")
            this.setState({ isShow: "none" })
        }
        else {
            this.setState({ isShow: "inline" })
        }
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
        const styles = { display: this.state.isShow }

        return (
            <div>
                <button id="hidemapbtn" onClick={this.show}>
                    Hide Map
                </button>
                <div style={styles}>
                    <div id="background">
                        <img src="https://wallpapersite.com/images/pages/pic_w/12048.jpg" class="stretch" alt="" />
                    </div>
                    <Router>
                        <div>
                            <EventModal eventsList={eventsList}
                                        changeSkill={this.props.changeSkill}
                            />
                            <Header
                                money={this.props.scores.money}
                                factories={factorySum}
                                reputation={sc.reputation}
                                destruction={destructionSum}
                            />
                            <Sidebar onClick={this.show} />
                            <div className="Content">
                                <Route path="/overview" render={(props) =>
                                    <Overview
                                        money={this.props.moChange}
                                        factories={factorySum}
                                        reputation={this.props.reChange}
                                        destruction={this.props.peChange}
                                        moHistory={this.props.moHistory}
                                        reHistory={this.props.reHistory}
                                        deHistory={this.props.peHistory}
                                    />}
                                />
                                <Route path="/skillpoints" render={(props) =>
                                    <Skillpoints
                                        skills={skills}
                                        beep={this.props.beep}
                                        changeSkill={this.props.changeSkill}
                                        skillPointLeft={this.props.skillPointLeft}
                                    />
                                } />
                                <Route path="/factories" render={(props) =>
                                    <Factories
                                        factories={f}
                                        changeFactory={this.props.changeFactory}
                                    />} />
                                <Route path="/login" component={Login} />
                                <Route exact path="/" component={Welcome} />
                            </div>
                        </div>
                    </Router>
                </div>
            </div>

        );
    }
}

export default App;