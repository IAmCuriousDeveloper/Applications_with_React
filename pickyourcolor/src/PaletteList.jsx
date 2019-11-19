import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./Minipalette";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%"
  }
};
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
          </nav>
          <div className={classes.palettes}>{minipalletes}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
