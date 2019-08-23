import React, { Component } from "react";
import Lottery from "./Lottery";
import MyLottery from "./MyLottery";
import Rules from "./Rules";

export default class LotteryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: [],
      winner: false
    };
    this.setMatch = this.setMatch.bind(this);
    this.setWinner = this.setWinner.bind(this);
  }
  setMatch(arr) {
    this.setState({ match: arr });
  }
  setWinner() {
    this.setState({ winner: !this.state.winner });
  }

  render() {
    return (
      <div>
        <Lottery
          setMatch={this.setMatch}
          isWinner={this.state.winner}
          title='Lottery'
          numBalls={6}
          maxNum={20}
        />

        <MyLottery
          title='Your Ticket'
          maxNum={20}
          numBalls={4}
          isWinner={this.state.winner}
          match={this.state.match}
          setWinner={this.setWinner}
        />
        <Rules />
      </div>
    );
  }
}
