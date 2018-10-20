import React from 'react';
import '../Styles/Welcome.css';
import money from "../Resources/keep-calm-and-love-cash-money.png";
import environmentdes from "../Resources/Environment-destruction.jpg";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div className="Welcome">
          Welcome! You are a businessperson trying to expand your
          coporation across the world. You can either make money or destroy
          the environment or both. It is up to you how you want to make this
          adventure.
        </div>

        <img className="KCAMM" src={money} alt="KEEP CALM AND MAKE MONEY"
          width="600" height="1000" />

        <img className="ENDE" src={environmentdes} alt="ENVIRONMENTAL DESTRUCTION"
          width="600" height="400" />
      </div>
    );
  }
}

export default Welcome;