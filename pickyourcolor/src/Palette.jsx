import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";
import Slider from "rc-slider";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    // default level 500
    this.state = {
      level: 500
    };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { level } = this.state;
    const { colors } = this.props.palette;
    const colorBoxes = colors[level].map(color => (
      <ColorBox key={color.name} background={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
