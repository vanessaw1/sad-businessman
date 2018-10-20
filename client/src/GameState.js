import React from 'react';

class PlayerData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {skills: {"bribe":1, "pr":1, "ads":1, "product":1, "profit":1},
                    skillsChange : {"bribe":0, "pr":0, "ads":0, "product":0, "profit":0},
                    scores: {"efficiency":1, "reputation":1, "money":1 }
                    };
    }

    updateSkills() {
        return this.state.skills;
    }

    updateScores() {
        var newScores = {"efficiency":this.state.scores.efficiency*2, 
                     "reputation":this.state.scores.reputation*2, 
                     "money":this.state.scores.money*2 }
        return newScores;
    }

    update() {
        this.setState = {skills: this.updateSkills(), scores: this.updateScores()};
        return this;
    }

    getScores() {
        return this.state.scores;
    }

    getSkills() {
        return this.state.skills;
    }

    render() {
        return <div></div>;
    }

}


export default class GameState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {PlayerData: new PlayerData()};
      }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        var aTick = this.state.PlayerData.update();
        this.setState({
            PlayerData: aTick
        });
        alert(aTick.getScores())
    }

    render() {

        return (
            <div> 
                <h1>The businessman has money {this.state.PlayerData.getScores().money}.</h1>
            </div>
        );
    }
}
