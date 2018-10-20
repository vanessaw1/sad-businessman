import React from 'react';
import App from './App.js'
// import '../Styles/App.css';

const numEvent = 1

// GameState.props = {isSkillChanged: bool, skillChange: [int,int,int,int,int]}
export default class GameState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage: {africa:0, na:1, sa:0, asia:0, eu:0, pacific:0},
            factories: {africa:0, na:1, sa:0, asia:0, eu:0, pacific:0},
            skills: {bribe:1, pr:1, ads:1, product:1, profit:1},
            scores: {money:1000000, reputation:1, efficiency:1},
            isEvents: false,
            events: { money: -1, reputation: -1, efficiency: -1 },
            isSkillChanged: false,
            skillChange: [0, 0, 0, 0, 0],
            isFactoryChanged: false,
            factoryChange: [0, 0, 0, 0, 0],
        }
        this.endGame = this.endGame.bind(this);
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

    changeFactory(factoryChange) {
        const sc = this.state.scores;
        if (sc.money > 100) {
            this.setState({
                scores: {
                    money: sc.money - 100, 
                    reputation: sc.reputation, 
                    efficiency: sc.efficiency
                },
                isFactoryChanged: true, 
                factoryChange: factoryChange});
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

    changeSkills(skillChange) {
        const sc = this.state.scores;
        if (sc.money > 100) {
            this.setState({
                scores: {
                    money: sc.money - 100, 
                    reputation: sc.reputation, 
                    efficiency: sc.efficiency
                },
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
        var newScore = {
            money: Math.round((sc.money + moChange)*100) / 100, 
            reputation: Math.round((sc.reputation + reChange)*100) / 100, 
            efficiency: sc.efficiency };
        return newScore;
    }

    updatePercen(past) {
        const p = past.percentage;
        const f = past.factories;
        const e = past.scores.efficiency;
        const sk = past.skills;
        const temps = [
            f.africa+sk.bribe, 
            f.na+sk.pr, 
            f.sa+sk.ads+sk.product, 
            f.asia+sk.ads, 
            f.eu+sk.pr+sk.ads,
            f.pacific+sk.product
        ];
        const c = temps.map((temp) => temp * e / 10)
        var newPercen = {
            africa:p.africa+c[0], 
            na:p.na+c[1], 
            sa:p.sa+c[2], 
            asia:p.asia+c[3], 
            eu:p.eu+c[4], 
            pacific:p.pacific+c[5]
        }
        return newPercen
    }

    spawn(source) {
        if (source * Math.random() > 500) { 
            const money = Math.round(numEvent * Math.random());
            return money
        }
        return -1;
    }

    updateEvent(past) {
        const money = this.spawn(past.money);
        const reputation = this.spawn(past.reputation);
        const efficiency = this.spawn(past.efficiency);
        if (money+reputation+efficiency !== -3) {
            const newEvent = {money: money, reputation: reputation, efficiency: efficiency};
            return newEvent 
        }
        else {
            return { money: -1, reputation: -1, efficiency: -1 };
        }
    }

    tick() {
        this.setState((state) => ({
            scores: this.updateScores(state),
            percentage: this.updatePercen(state),
            events: this.updateEvent(state.scores)
          }));
    }

    endGame() {
        const sc = this.state.scores;
        const pc = this.state.percentage;
        if (sc.money === 0) {
            clearInterval(this.timerID);
            return "bankrupt";
        }
        else if (pc.africa === 100 && pc.na === 100 && pc.sa === 100 && 
            pc.asia === 100 && pc.eu === 100 && pc.pacific === 100) {
            clearInterval(this.timerID);
            return "conquered";
        }
        else {
            return "continue";
        }
    }

    render() {
        if (this.state.isSkillChanged === true) {
            this.updateSkills();
        }
        if (this.state.isFactoryChanged === true) {
            this.updateFactory();
        }
        const scores = this.state.scores;
        const factories = this.state.factories;
        const percentage = this.state.percentage;
        const gameState = this.endGame();
        return (
            <div>
                <App 
                gameState = {gameState}
                // changeSkills = {this.changeSkills} 
                // changeFactory = {this.changeFactory} 
                // events = {this.state.events}
                scores = {scores}
                factories = {factories}
                // skills = {this.state.skills}
                percentage = {percentage}
                />
            </div>
        );
    }
}
