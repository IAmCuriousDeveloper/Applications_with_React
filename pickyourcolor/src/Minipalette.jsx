import React from "react";
import styles from "./styles/MiniPaletteStyles";
import { withStyles } from "@material-ui/styles";

function Minipalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const minicolorBoxes = colors.map(color => {
    return (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    );
  });
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{minicolorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(Minipalette);
