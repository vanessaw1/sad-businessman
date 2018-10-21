import React from 'react';
import '../Styles/Skillpoints.css';

class Skillpoints extends React.Component {
    constructor(props) {
        super(props);
        this.handleBribeInc = this.handleBribeInc.bind(this);
        this.handlePRInc = this.handlePRInc.bind(this);
        this.handleAdsInc = this.handleAdsInc.bind(this);
        this.handleProductInc = this.handleProductInc.bind(this);
        this.handleProfitInc = this.handleProfitInc.bind(this);
        this.handleBribeDec = this.handleBribeDec.bind(this);
        this.handleAdsDec = this.handleAdsDec.bind(this);
        this.handlePRDec = this.handlePRDec.bind(this);
        this.handleProductDec = this.handleProductDec.bind(this);
        this.handleProfitDec = this.handleProfitDec.bind(this);
    }

    handleBribeDec(e) { this.props.changeSkill([-1, 0, 0, 0, 0]) }
    handleBribeInc(e) { this.props.changeSkill([1, 0, 0, 0, 0]) }
    handlePRDec(e) { this.props.changeSkill([0, -1, 0, 0, 0]) }
    handlePRInc(e) { this.props.changeSkill([0, 1, 0, 0, 0]) }
    handleAdsDec(e) { this.props.changeSkill([0, 0, -1, 0, 0]) }
    handleAdsInc(e) { this.props.changeSkill([0, 0, 1, 0, 0]) }
    handleProductDec(e) { this.props.changeSkill([0, 0, 0, -1, 0]) }
    handleProductInc(e) { this.props.changeSkill([0, 0, 0, 1, 0]) }
    handleProfitDec(e) { this.props.changeSkill([0, 0, 0, 0, -1]) }
    handleProfitInc(e) { this.props.changeSkill([0, 0, 0, 0, 1]) }

    render() {
        const skills = this.props.skills;
        return (
            <div className="Intro">
                These are your current upgrades. You can purchase more upgrades from here.
                You have {this.props.skillPointLeft} points left.
                <div className="Upgrades">
                    <div>
                        <button className="inc" onClick={this.handleBribeInc}>+</button>
                        <button className="dec" onClick={this.handleBribeDec}>-</button>
                        Bribes: {skills.bribe}
                        {"     Buy a bribe to government and NGO officials to put in good words for your company."}
                    </div>
                    <div>
                        <button className="inc" onClick={this.handlePRInc}>+</button>
                        <button className="dec" onClick={this.handlePRDec}>-</button>
                        PR (Public Relation): {skills.pr}
                        {"    Imploy a communication strategy that builds beneficial relationships between your company and its publics."}
                    </div>
                    <div>
                        <button className="inc" onClick={this.handleAdsInc}>+</button>
                        <button className="dec" onClick={this.handleAdsDec}>-</button>
                        Advertisement Effectiveness: {skills.ads}
                        {"    Make an effective advertisement to increase your company's influence and reputation."}
                    </div>
                    <div>
                        <button className="inc" onClick={this.handleProductInc}>+</button>
                        <button className="dec" onClick={this.handleProductDec}>-</button>
                        Product Output: {skills.product}
                        {"    Increase your company's product quality to increase its reputation."}
                    </div>
                    <div>
                        <button className="inc" onClick={this.handleProfitInc}>+</button>
                        <button className="dec" onClick={this.handleProfitDec}>-</button>
                        Profit Margin: {skills.profit}
                        {"    Get your profit margin close to optimal so that you make the most out of what you make."}
                    </div>
                </div>
            </div>
        );
    }
}

export default Skillpoints;