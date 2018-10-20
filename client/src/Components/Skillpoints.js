import React from 'react';
import '../Styles/Skillpoints.css';

class Skillpoints extends React.Component {
    render() {
        return (
            <div className="Intro">
                These are your current upgrades. You can purchase more upgrades from here.
                <div className="Upgrades">
                    <div>
                        <button className="dec">-</button>
                        Bribes
                        <button className="inc">+</button>
                    </div>
                    <div>
                        <button className="dec">-</button>
                        PR (Public Reputation)
                        <button className="inc">+</button>
                    </div>
                    <div>
                        <button className="dec">-</button>
                        Advertisement Effectiveness
                        <button className="inc">+</button>
                    </div>
                    <div>
                        <button className="dec">-</button>
                        Product Output
                        <button className="inc">+</button>
                    </div>
                    <div>
                        <button className="dec">-</button>
                        Profit Margin
                        <button className="inc">+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skillpoints;