import React, { Component } from "react";
import "./Lottery.css";
export default class Rules extends Component {
  render() {
    return (
      <div className='Lottery'>
        <h1>Rules</h1>
        <ul>
          <li>Generate The Lottery</li>
          <li>Generate your Ticket</li>
          <li>
            If your ticket contains atleast 3 numbers from the Lottery You Win
          </li>
        </ul>
      </div>
    );
  }
}
