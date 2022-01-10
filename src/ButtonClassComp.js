import React, { Component } from "react";

export default class ButtonClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, entered: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ counter: ++prevState.counter }));
  }

  handleMouseEnter() {
    this.setState({ entered: true });
  }

  handleMouseLeave() {
    this.setState({ entered: false });
  }
  
  render() {
    return (
      <button
        className={this.state.entered ? "buttonEntered" : undefined}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        Нажали {this.state.counter} раз
      </button>
    );
  }
}
