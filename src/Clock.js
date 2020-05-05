import React from "react";
import logo from "./logo.svg";
// import "./App.css";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }
  // LifeCycle Methods.
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div>
        <img src={logo} alt="none" />
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
