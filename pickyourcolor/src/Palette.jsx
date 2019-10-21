import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox key={color.name} background={color.color} name={color.name} />
    ));
    return (
      <div className='Palette'>
        <div className='Palette-colors'>{colorBoxes}</div>
      </div>
    );
  }
}
