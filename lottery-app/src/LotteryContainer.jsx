import React, { Component } from "react";
import Lottery from "./Lottery";

export default class LotteryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: [],
      winner: false
    };
    this.setMatch = this.setMatch.bind(this);
  }
  setMatch(arr) {
    this.setState({ match: arr });
  }
  render() {
    return (
      <div>
        <Lottery setMatch={this.setMatch} />
        <Lottery title='Your Ticket' maxNum={10} numBalls={4} />
      </div>
    );
  }
}
