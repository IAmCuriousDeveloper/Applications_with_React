import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";
import Compare from "./helper";
import "./MyLottery.css";

export default class MyLottery extends Component {
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
        const won = Compare(this.props.match, this.state.nums);
        if (won) this.props.setWinner();
      }
    );
  }
  handleClick(e) {
    this.generate();
  }

  render() {
    if (this.props.isWinner) {
      return (
        <section className='Lottery'>
          <h1>{this.props.title}</h1>
          <div>
            {this.state.nums.map(n => (
              <Ball num={n} />
            ))}
          </div>
          <button onClick={this.handleClick} disabled={this.props.isWinner}>
            Generate
          </button>
          <h1 className='glow'>YOU WON!!!</h1>
          <button onClick={this.props.setWinner}>Play Again ?</button>
        </section>
      );
    } else {
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
}
