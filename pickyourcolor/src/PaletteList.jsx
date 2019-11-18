import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./Minipalette";

export default class PaletteList extends Component {
  render() {
    const { palette } = this.props;
    // const allPalette = palette.map(palette => {
    //   return (
    //     <p>
    //       <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
    //     </p>
    //   );
    // });
    const minipalletes = palette.map(palette => {
      return <MiniPalette {...palette} />;
    });
    return (
      <div>
        <h1>Pick Your Colors</h1>
        {minipalletes}
      </div>
    );
  }
}
