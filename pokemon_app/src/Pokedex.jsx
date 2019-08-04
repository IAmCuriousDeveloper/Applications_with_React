import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
export default class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className='Pokedex-winner'>Winner woohoo!!!</h1>;
    } else {
      title = <h1 className='Pokedex-winner'>Loser oh NO!!</h1>;
    }
    return (
      <div className='Pokedex'>
        {title}
        <h3>Total Experience : {this.props.exp}</h3>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map(p => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
              key={p.name}
            />
          ))}
        </div>
      </div>
    );
  }
}
