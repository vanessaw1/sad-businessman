import React from 'react';
import '../Styles/Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: props.pressed,
            logIn: false,
            signUp: false
        };
        this.logInPressed = this.logInPressed.bind(this);
        // this.cancelPressed = this.cancelPressed.bind(this);
        this.signUpPressed = this.signUpPressed.bind(this);
    };

    logInPressed(toggle) {
        this.setState({
            logIn: toggle
        });
    };

    signUpPressed(toggle) {
        this.setState({
            signUp: toggle
        });
    };

    render() {
        return (
            <div className={"LoginContent" + this.state.pressed}>
                {/* <div className="LoginContainer">
                    Please enter your login info:
                    <div className="UserInfo">
                        <label for="uname"> Username: </label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>
                        <label for="uname"> Password: </label>
                        <input type="password" placeholder="Enter Password" name="pwd" required></input>
                    </div>
                    <button className="LoginB" onClick={() => this.logInPressed(true)}> Log In </button>
                    <button className="LoginB" onClick={() => this.signUpPressed(true)}> Sign Up </button>
                    <button className="LoginB" onClick={() => this.signUpPressed(true)}> Cancel </button>
                </div> */}
            </div>
        );
    }
}

export default Login;