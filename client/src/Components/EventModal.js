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

    toggleHidden(toggle, r) {
        this.props.changeSkill(r.skills);
        this.props.changeScore(r.scores);
        alert("skill changed! " + r.skills + "\nscore changed! " + r.scores);
        this.setState({
            isHidden: toggle
        });
        this.props.setClick();
    };

    option(l,r) {
        var list = []

        for (var i = 0; i< l.length; i ++) {
            const some = r[i]
            list.push(
                <button className="Options" onClick={() => this.toggleHidden(true,some)}>{l[i]}</button>
            );
        }
        return list;
    }

    render() {
        const eventsList = this.props.eventsList;
        return (
            <div>
                    {(eventsList.length > 0) && 
                    eventsList.map( (elt) =>
                        <div className={"EventModal " + this.state.isHidden}>
                        <div className="Details">
                        <div>
                        <div className="Caption">
                        {elt.title}
                        </div>
                        <div className="Description">
                        {elt.content}
                        </div>
                            {
                            this.option(elt.choice,elt.response).map( (e) => e
                            )
                            }
                        </div>
                        </div>
                        </div>
                    )
                    }
                    </div>
        );
    }
}

export default EventModal;