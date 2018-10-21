import React from 'react';
import '../Styles/Factories.css';
import Beijing from "../Resources/Cities/Beijing.jpg";
import Berlin from "../Resources/Cities/Berlin.jpg";
import Boston from '../Resources/Cities/Boston.jpg';
import Brasilia from '../Resources/Cities/Brasilia.jpg';
import Fukushima from "../Resources/Cities/Fukushima.jpg";
import Hanoi from "../Resources/Cities/Hanoi.jpg";
import Ithaca from "../Resources/Cities/Ithaca.jpg";
import Lima from '../Resources/Cities/Lima.jpg';
import London from '../Resources/Cities/London.jpg';
import Malabo from '../Resources/Cities/Malabo.jpg';
import Moscow from '../Resources/Cities/Moscow.jpg';
import Nairobi from '../Resources/Cities/Nairobi.jpg';
import NYC from '../Resources/Cities/New\ York.jpg';
import Paris from '../Resources/Cities/Paris.jpg';
import Sydney from '../Resources/Cities/Sydney.jpg';
import Wellington from '../Resources/Cities/Wellington.jpg';

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

    createDotLists(citylst, cityname, handle) {
        let dotlsts = []

        // Outer loop to create parent
        for (let i = 0; i < 4; i++) {
            dotlsts.push(
                <div className={"dot"}>
                    <img className="img-circle"
                        src={citylst[i]} width="100" height="100">
                    </img>
                    <span className="cityname"> {cityname[i]}</span>
                    <button class="btn" onClick={handle[i]}></button>
                </div >
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
        const lst1 = [NYC, Beijing, Lima, Sydney];
        const lst1str = ["NYC", "Beijing", "Lima", "Sydney"];
        const lst1handle = [this.handleNA, this.handleAsia, this.handleSA, this.handlePacific];

        const lst2 = [Ithaca, Hanoi, Wellington, Paris];
        const lst2str = ["Ithaca", "Hanoi", 'Wellington', "Paris"];
        const lst2handle = [this.handleNA, this.handleAsia, this.handlePacific, this.handleEurope];

        const lst3 = [Fukushima, Boston, Brasilia, Malabo];
        const lst3str = ["Fukushima", "Boston", "Brasilia", "Malabo"];
        const lst3handle = [this.handleAsia, this.handleNA, this.handleSA, this.handleAfrica];

        const lst4 = [Nairobi, Moscow, Berlin, London];
        const lst4str = ["Nairobi", "Moscow", "Berlin", "London"];
        const lst4handle = [this.handleAfrica, this.handleEurope, this.handleEurope, this.handleEurope];

        return (

            <div className="FactoriesContent">
                These are your factories from all over the world. You can manage your factories here.

            <div className="CitiesList">
                    <div>
                        {this.createDotLists(lst1, lst1str, lst1handle)}
                    </div>
                    <div>
                        {this.createDotLists(lst2, lst2str, lst2handle)}
                    </div>
                    <div>
                        {this.createDotLists(lst3, lst3str, lst3handle)}
                    </div>
                    <div>
                        {this.createDotLists(lst4, lst4str, lst4handle)}
                    </div>
                </div>

                {/* <table className="FactoriesTable">
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
                </table> */}
            </div>
        );
    }
}

export default Factories;