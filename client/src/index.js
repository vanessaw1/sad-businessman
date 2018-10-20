import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div>
                        <Link to="/main">Main</Link>
                        <Link to="/map">Map</Link>
                    </div>
                    <div>
                        <Route path="/main" component={Main} />
                        <Route path="/map" component={Map} />
                    </div>
                </div>
            </Router>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div>
                        This is the main page
                    </div>
                </div>
            </Router>
        );
    }
}

class Map extends React.Component {
    render() {
        return (
            <div>
                This is the map
            </div>
        );
    }
}

// ========================================
// export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
