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
                <table>
                    <tr>
                        <th>Add New Factory</th>
                        <th>Continents</th>
                        <th>Factories</th>
                    </tr>
                    <tr>
                        <th><button onClick={this.handleAfrica}>Add Factory</button></th>
                        <th>Africa</th>
                        <th>Nairobi, Malabo, dasfasdf, adsfasdf, asdfs</th>
                    </tr>
                    <tr>
                        <th><button onClick={this.handleNA}>Add Factory</button></th>
                        <th>North America</th>
                        <th>asdf</th>
                    </tr>
                    <tr>
                        <th><button onClick={this.handleSA}>Add Factory</button></th>
                        <th>South America</th>
                        <th>asdf</th>
                    </tr>
                    <tr>
                        <th><button onClick={this.handleAsia}>Add Factory</button></th>
                        <th>Asia</th>
                        <th>asdfasdf</th>
                    </tr>
                    <tr>
                        <th><button onClick={this.handleEurope}>Add Factory</button></th>
                        <th>Europe</th>
                        <th>asdfasdf</th>
                    </tr>
                    <tr>
                        <th><button onClick={this.handlePacific}>Add Factory</button></th>
                        <th>Pacific</th>
                        <th>asdfasdf</th>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Factories;