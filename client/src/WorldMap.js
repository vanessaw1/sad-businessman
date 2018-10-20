import React from 'react';

var Background = url(/images/worldmap)

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + Background + ")"
};

class WorldMap extends React.Component {

    render() {
        return (
            <div>
                This is a map of the world.
                <section style={sectionStyle}>
                </section>
            </div>
        );
    }
}

export default WorldMap;