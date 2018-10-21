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
                These are your current upgrades. You can allocate your points from here. 
                Increasing and decreasing points costs money.
                You have {this.props.skillPointLeft} points left.
                <div className="Upgrades">
                    <div>
                        <button className="dec" onClick={this.handleBribeDec}>-</button>
                        <button className="inc" onClick={this.handleBribeInc}>+</button>
                        Bribes:   {skills.bribe}
                        <div className="description">
                            Cost: $1000<br />
                            Buy a bribe to government and NGO officials to put in good words for your company.
                            Bribe the African government! Helps increase destruction/day by 0.5
                        </div>
                    </div>
                    <div>
                        <button className="dec" onClick={this.handlePRDec}>-</button>
                        <button className="inc" onClick={this.handlePRInc}>+</button>
                        PR (Public Relation): {skills.pr}
                        <div className="description">
                            Cost: $1000<br />
                            Imploy a communication strategy that builds beneficial relationships between your company and its publics.
                            Don't forget to maintain a good image! Helps increase destruction/day by 0.05
                        </div>
                    </div>
                    <div>
                        <button className="dec" onClick={this.handleAdsDec}>-</button>
                        <button className="inc" onClick={this.handleAdsInc}>+</button>
                        Advertisement Effectiveness: {skills.ads}
                        <div className="description">
                            Cost: $1000<br />
                            Make an effective advertisement to increase your company's influence and reputation.
                            More advertising means more consumers! Helps increase destruction/day by 0.05
                        </div>
                    </div>
                    <div>
                        <button className="dec" onClick={this.handleProductDec}>-</button>
                        <button className="inc" onClick={this.handleProductInc}>+</button>
                        Product Output: {skills.product}
                        <div className="description">
                            Cost: $1000<br />
                            Increase your company's product quality to increase its reputation.
                            You can never have enough product! Helps increase destruction/day by 0.05
                        </div>
                    </div>
                    <div>
                        <button className="dec" onClick={this.handleProfitDec}>-</button>
                        <button className="inc" onClick={this.handleProfitInc}>+</button>
                        Profit Margin: {skills.profit}
                        <div className="description">
                            Cost: $1000<br />
                            Get your profit margin close to optimal so that you make the most out of what you make.
                            Increases how much money you make per product. Helps increase destruction/day by 0.05
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skillpoints;