import React from 'react';
import '../Styles/Factories.css';

class Factories extends React.Component {
    render() {
        return (
            <div className="FactoriesContent">
                These are your factories. You can manage your factories from here.
                <button>
                    Create
                </button>
            </div>
        );
    }
}

export default Factories;