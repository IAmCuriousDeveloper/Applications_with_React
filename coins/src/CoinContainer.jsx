import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helper";
export default class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc:
          "http://travel.fyicenter.com/Currency/INR_1_One_Rupee_Coin_Head.jpg"
      },
      {
        side: "tails",
        imgSrc:
          "http://travel.fyicenter.com/Currency/INR_1_One_Rupee_Coin_Tail.jpg"
      }
    ]
  };
  constructor(props) {
    super(props);

    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className='CoinContainer'>
        <h2>Lets flip a coin</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Toss me</button>
        <p>
          Out of {this.state.nFlips} flips,there have been {this.state.nHeads}{" "}
          Heads and {this.state.nTails} tails
        </p>
      </div>
    );
  }
}
