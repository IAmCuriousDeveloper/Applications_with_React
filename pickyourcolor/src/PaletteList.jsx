import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PaletteList extends Component {
  render() {
    const { palette } = this.props;
    const paletteNames = palette.map(palette => {
      return (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      );
    });
    return <div>{paletteNames}</div>;
  }
}
