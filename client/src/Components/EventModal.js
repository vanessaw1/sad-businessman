import React from 'react';
import '../Styles/EventModal.css';

class EventModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true //this.props.eventsList.len > 0
        };
        this.toggleHidden = this.toggleHidden.bind(this);
    };

    toggleHidden(toggle) {
        this.setState({
            isHidden: toggle
        });
    };

    render() {
        // const options = <button>Ok</button>
        // const options = this.props.options.map(option => 
        //     <button>{option}</button>
        // );

        return (
            <div className={"EventModal " + this.state.isHidden}>
                <div className="Details">
                    <div className="Caption">
                        Random Event!
                    </div>
                    <div className="Description">
                        {/* {this.props.eventsList[0][2]} */}
                        Example description. Will you choose option 1 or option 2? Hmmmmmmmmmm
                    </div>
                    <div>
                        <button className="Options" onClick={() => this.toggleHidden(true)}>Option 1</button>
                        <button className="Options" onClick={() => this.toggleHidden(true)}>Option 2</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventModal;