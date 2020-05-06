import React from "react";
import logo from "./logo.svg";

// import "./App.css";

function FormatedDate(props) {
  return <h2>It is {props.time.toLocaleTimeString()}.</h2>;
}

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
    // console.log(this.state, "before");
    this.setState({ time: new Date() });
    // console.log(this.state, "after");
  }

  render() {
    return (
      <div>
        <img src={logo} alt="none" />
        <FormatedDate time={this.state.time} />
      </div>
    );
  }
}
