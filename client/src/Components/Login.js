import React from 'react';
import '../Styles/Login.css';

class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isHidden: false //this.props.eventsList.len > 0
    //     };
    //     this.toggleHidden = this.toggleHidden.bind(this);
    //     this.toggleHidden = this.toggleHidden.bind(this);
    //     this.toggleHidden = this.toggleHidden.bind(this);
    // };

    render() {
        return (
            <div className="LoginContent">
                <div className="LoginContainer">
                    Please enter your login info:
                    {/* <div className="UserInfo">
                        <label for="uname"> Username: </label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>
                        <label for="uname"> Password: </label>
                        <input type="password" placeholder="Enter Password" name="pwd" required></input>
                    </div>
                    <button className="LoginB" onClick={() => this.toggleHidden(true)}> Log In </button>
                    <button className="LoginB" onClick={() => this.toggleHidden(true)}> Sign Up </button>
                    <button className="LoginB" onClick={() => this.toggleHidden(true)}> Log Out </button> */}
                </div>
            </div>
        );
    }
}

export default Login;