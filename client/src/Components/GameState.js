import React from 'react';
import App from './App.js'
import '../Styles/App.css';
import event from '../event.json';

const moneEvent = event[0];
const repuEvent = event[1];
const effiEvent = event[2];

// GameState.props = {isSkillChanged: bool, skillChange: [int,int,int,int,int]}
export default class GameState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            precentage: { africa: 0, na: 1, sa: 0, asia: 0, eu: 0, pacific: 0 },
            factories: { africa: 0, na: 1, sa: 0, asia: 0, eu: 0, pacific: 0 },
            skills: { bribe: 1, pr: 1, ads: 1, product: 1, profit: 1 },
            scores: { money: 1, reputation: 1, efficiency: 1 },
            isEvents: false,
            events: { money: -1, reputation: -1, efficiency: -1 },
            isSkillChanged: false,
            skillChange: [0, 0, 0, 0, 0],
            isFactoryChanged: false,
            factoryChange: [0, 0, 0, 0, 0],
        }
        this.changeSkills = this.changeSkills.bind(this);
        this.changeFactory = this.changeFactory.bind(this);
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    changeFactory(state, factoryChange) {
        const sc = state.scores;
        if (sc.money > 100) {
            this.setState({
                scores: { money: sc.money - 100, reputation: sc.reputation, efficiency: sc.efficiency },
                isFactoryChanged: true,
                factoryChange: factoryChange
            });
        }
    }

    updateFactory(state) {
        const f = state.factories;
        const c = state.factoryChange;
        this.setState({
            isFactoryChanged: false,
            factories: {
                africa: f.africa + c[0],
                na: f.na + c[1],
                sa: f.sa + c[2],
                asia: f.asia + c[3],
                eu: f.eu + c[4],
                pacific: f.pacific + c[5]
            }
        });
    }

    changeSkills(state, skillChange) {
        const sc = state.scores;
        if (sc.money > 100) {
            this.setState({
                scores: { money: sc.money - 100, reputation: sc.reputation, efficiency: sc.efficiency },
                isSkillChanged: true,
                skillChange: skillChange
            });
        }
    }

    updateSkills(state) {
        const s = state.skills;
        const c = state.skillChange;
        this.setState({
            isSkillChanged: false,
            skills: {
                bribe: s.bribe + c[0],
                pr: s.pr + c[1],
                ads: s.ads + c[2],
                product: s.product + c[3],
                profit: s.profit + c[4]
            },
        });
    }

    updateScores(past) {
        const f = past.factories;
        const sc = past.scores;
        const sk = past.skills;
        var moChange = sc.reputation * (f.africa + f.na + f.sa + f.asia + f.eu + f.pacific);
        var reChange = sc.efficiency / (sk.bribe + sk.pr + sk.ads + sk.product)
        var newScore = { money: sc.money * moChange, reputation: sc.reputation * reChange, efficiency: 1 };
        return newScore;
    }

    updatePercen(past) {
        const p = past.precentage;
        const f = past.factories;
        const e = past.scores.efficiency;
        const sk = past.skills;
        const temps = [f.africa + sk.bribe, f.na + sk.pr, f.sa + sk.ads + sk.product, f.asia + sk.ads, f.pacific + sk.product];
        const c = temps.map((temp) => temp * e / 10)
        var newPercen = { africa: p.africa + c[0], na: p.na + c[1], sa: p.sa + c[2], asia: p.asia + c[3], eu: p.eu + c[4], pacific: p.pacific + c[5] }
        return newPercen
    }

    spawn(source, len) {
        if (source * Math.random() > 500) {
            const money = Math.round(len * Math.random());
            return money
        }
        return -1;
    }

    updateEvent(past) {
        const money = this.spawn(past.money, moneEvent.length);
        const reputation = this.spawn(past.reputation, repuEvent.length);
        const efficiency = this.spawn(past.efficiency, effiEvent.length);
        if (money + reputation + efficiency !== -3) {
            const newEvent = { money: money, reputation: reputation, efficiency: efficiency };
            return newEvent
        }
        else {
            return { money: -1, reputation: -1, efficiency: -1 };
        }
    }

    tick() {
        this.setState((state) => ({
            scores: this.updateScores(state),
            precentage: this.updatePercen(state),
            events: this.updateEvent(state.scores)
        }));
    }

    render() {
        if (this.props.isSkillChanged === true) {
            this.updateSkills();
        }
        if (this.props.isFactoryChanged === true) {
            this.updateFactory();
        }
        return (
            <div>
                <h1>The businessman has money {this.state.scores.money}.</h1>
                <App changeSkills={this.changeSkills} changeFactory={this.changeFactory} />
            </div>
        );
    }
}
