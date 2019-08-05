import React, { Component } from "react";
import "./Rolldice.css";
import Die from "./Die";
export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "two", rolling: false };
    this.roll = this.roll.bind(this);
  }
  roll(e) {
    let newdie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    let newdie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    //set state with new rolls

    this.setState({
      die1: newdie1,
      die2: newdie2,
      rolling: true
    });

    //wait for one second then set state again
    setTimeout(() => {
      this.setState({ rolling: true });
    }, 1000);
  }
  render() {
    return (
      <div className='Rolldice'>
        <div className='Rolldice-container'>
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.roll} disabled={this.props.rolling}>
          {this.state.rolling ? "rolling" : "Roll dice!"}
        </button>
      </div>
    );
  }
}
