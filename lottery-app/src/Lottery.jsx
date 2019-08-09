import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";
export default class Lottery extends Component {
  static defaultProps = {
    title: "Lottery",
    numBalls: 6,
    maxNum: 50
  };

  constructor(props) {
    super(props);

    this.state = {
      nums: Array.from({ length: this.props.numBalls })
    };
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    this.setState(
      currState => ({
        nums: currState.nums.map(
          n => Math.floor(Math.random() * this.props.maxNum) + 1
        )
      }),
      () => {
        if (this.props.title === "Lottery") {
          this.props.setMatch(this.state.nums);
        }
      }
    );
  }
  handleClick(e) {
    this.generate();
  }

  render() {
    return (
      <section className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}
