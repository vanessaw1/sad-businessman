import React from 'react';
import '../Styles/Factories.css';

class Factories extends React.Component {
    constructor(props) {
        super(props);
        this.handleAfrica = this.handleAfrica.bind(this);
        this.handleNA = this.handleNA.bind(this);
        this.handleSA = this.handleSA.bind(this);
        this.handleAsia = this.handleAsia.bind(this);
        this.handleEurope = this.handleEurope.bind(this);
        this.handlePacific = this.handlePacific.bind(this);
    }

    handleAfrica(e) {this.props.changeFactory([1,0,0,0,0,0])}
    handleNA(e) {this.props.changeFactory([0,1,0,0,0,0])}
    handleSA(e) {this.props.changeFactory([0,0,1,0,0,0])}
    handleAsia(e) {this.props.changeFactory([0,0,0,1,0,0])}
    handleEurope(e) {this.props.changeFactory([0,0,0,0,1,0])}
    handlePacific(e) {this.props.changeFactory([0,0,0,0,0,1])}

    render() {

        // const factoryItems = this.props.factories.map(factory => 
        //     <li>{factory}</li>
        // );

        return (
            <div className="FactoriesContent">
                These are your factories. You can manage your factories from here.
                <div>
                    Africa
                    <button onClick={this.handleAfrica}>Add Factory</button>
                </div>
                <div>
                    North America
                    <button onClick={this.handleNA}>Add Factory</button>
                </div>
                <div>
                    South America
                    <button onClick={this.handleSA}>Add Factory</button>
                </div>
                <div>
                    Asia
                    <button onClick={this.handleAsia}>Add Factory</button>
                </div>
                <div>
                    Europe
                    <button onClick={this.handleEurope}>Add Factory</button>
                </div>
                <div>
                    Pacific
                    <button onClick={this.handlePacific}>Add Factory</button>
                </div>
            </div>
        );
    }
}

export default Factories;