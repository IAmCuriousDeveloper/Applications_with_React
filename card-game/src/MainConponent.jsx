import React, { Component } from "react";
import axios from "axios";
const API_base_URL = "https://deckofcardsapi.com/api/deck";
//const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/";
//const drawApi = "https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/";
export default class MainConponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: "",
      name: "",
      deck: null
    };
    this.handleGetCard = this.handleGetCard.bind(this);
  }
  async componentDidMount() {
    const response = await axios.get(`${API_base_URL}/new/shuffle/`);
    //console.log(response);
    this.setState({
      deck: response.data
    });
  }

  async handleGetCard(e) {
    //console.log(this.state.deck);
    const deck_id = this.state.deck.deck_id;
    console.log(deck_id);
    const cardRes = await axios.get(`${API_base_URL}/${deck_id}/draw/`);
    const card = cardRes.data.cards[0];
    console.log(card);
  }

  render() {
    return (
      <div>
        <h1>Lets play card game</h1>
        <img src={this.state.imgSrc} alt={this.state.name} />
        <button onClick={this.handleGetCard}>Click me</button>
      </div>
    );
  }
}
