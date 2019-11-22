import React, { Component } from "react";
import MiniPalette from "./Minipalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    const minipalletes = palettes.map(palette => {
      return (
        <MiniPalette
          {...palette}
          handleClick={id => this.goToPalette(palette.id)}
        />
      );
    });
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>PickYourColor</h1>
            <Link to="/palette/new"> Create New Palette</Link>
          </nav>
          <div className={classes.palettes}>{minipalletes}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
