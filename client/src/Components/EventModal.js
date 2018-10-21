import React from 'react';
import '../Styles/EventModal.css';

class EventModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false //this.props.eventsList.len > 0
        };
        this.toggleHidden = this.toggleHidden.bind(this);
    };

    toggleHidden(toggle) {
        this.setState({
            isHidden: toggle
        });
    };

    render() {
        return (
            <div className={"EventModal " + this.state.isHidden}>
                <div className="Details">
                    <div className="Caption">
                        Random Event!
                    </div>
                    <div className="Description">
                        {/* {this.props.eventsList[0][2]} */}
                        This game is addictive. Are you sure you would like to proceed?
                    </div>
                    <div>
                        <button className="Options" onClick={() => this.toggleHidden(true)}>Yes</button>
                        <button className="Options" onClick={() => this.toggleHidden(true)}>Why not?</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventModal;