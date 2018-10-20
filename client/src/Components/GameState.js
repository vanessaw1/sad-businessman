import React from 'react';
import App from './App.js'
// import '../Styles/App.css';

// GameState.props = {isSkillChanged: bool, skillChange: [int,int,int,int,int]}
export default class GameState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            precentage: { africa: 0, na: 1, sa: 0, asia: 0, eu: 0, pacific: 0 },
            factories: { africa: 0, na: 1, sa: 0, asia: 0, eu: 0, pacific: 0 },
            skills: { bribe: 1, pr: 1, ads: 1, product: 1, profit: 1 },
            scores: { money: 1, reputation: 1, efficiency: 1 },
            events: { pos: 0, neu: 0, neg: 0 }
        }
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

    updateSkills(state, props) {
        const s = state.skills;
        const sc = state.scores;
        const c = props.skillChange;
        this.setState({
            skills: {
                bribe: s.bribe + c[0],
                pr: s.pr + c[1],
                ads: s.ads + c[2],
                product: s.product + c[3],
                profit: s.profit + c[4]
            },
            scores: { money: sc.money - 100, reputation: sc.reputation, efficiency: sc.efficiency },
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

    tick() {
        this.setState((state) => ({
            scores: this.updateScores(state),
            precentage: this.updatePercen(state)
        }));
    }

    render() {
        if (this.props.isSkillChanged === true) {
            this.updateSkills();
        }
        return (
            <div>
                <h1>The businessman has money {this.state.scores.money}.</h1>
                <App />
            </div>
        );
    }
}
