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

    handleAfrica(e) { this.props.changeFactory([1, 0, 0, 0, 0, 0]) }
    handleNA(e) { this.props.changeFactory([0, 1, 0, 0, 0, 0]) }
    handleSA(e) { this.props.changeFactory([0, 0, 1, 0, 0, 0]) }
    handleAsia(e) { this.props.changeFactory([0, 0, 0, 1, 0, 0]) }
    handleEurope(e) { this.props.changeFactory([0, 0, 0, 0, 1, 0]) }
    handlePacific(e) { this.props.changeFactory([0, 0, 0, 0, 0, 1]) }

    createDotLists(n, continent) {
        let dotlsts = []

        // Outer loop to create parent
        for (let i = 0; i < n; i++) {
            // dotlsts.push(<div class={"dot" + continent + i}>
            dotlsts.push(
                <div class={"dot"}>
                    <span class="cityname">CityName</span>
                </div>
            )
        }
        return dotlsts
    }

    render() {
        const f = this.props.factories
        const sa_num = f.sa
        const na_num = f.na
        const af_num = f.africa
        const as_num = f.asia
        const eu_num = f.eu
        const pa_num = f.pacific

        // const factoryItems = this.props.factories.map(factory =>
        //     <li>{factory}</li>
        // );

        return (
            <div className="FactoriesContent">
                These are your factories from all over the world. You can manage your factories here.
                <table className="FactoriesTable">
                    <tr>
                        <th></th>
                        <th>Continents</th>
                        <th>Factories</th>
                    </tr>
                    <tr>
                        <td><button className="Add" onClick={this.handleAfrica}>Add</button></td>
                        <td>Africa</td>
                        <td>
                            {this.createDotLists(af_num, "AF")}
                        </td>
                    </tr>
                    <tr>
                        <td><button className="Add" onClick={this.handleNA}>Add</button></td>
                        <td>North America</td>
                        <td>
                            {this.createDotLists(na_num, "NA")}
                        </td>
                    </tr>
                    <tr>
                        <td><button className="Add" onClick={this.handleSA}>Add</button></td>
                        <td>South America</td>
                        <td>
                            {this.createDotLists(sa_num, "SA")}
                        </td>
                    </tr>
                    <tr>
                        <td><button className="Add" onClick={this.handleAsia}>Add</button></td>
                        <td>Asia</td>
                        <td>
                            {this.createDotLists(as_num, "AS")}
                        </td>
                    </tr>
                    <tr>
                        <td><button className="Add" onClick={this.handleEurope}>Add</button></td>
                        <td>Europe</td>
                        <td>
                            {this.createDotLists(eu_num, "EU")}
                        </td>
                    </tr>
                    <tr>
                        <td><button className="Add" onClick={this.handlePacific}>Add</button></td>
                        <td>Pacific</td>
                        <td>
                            {this.createDotLists(pa_num, "PA")}
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Factories;