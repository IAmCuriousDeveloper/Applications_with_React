import React from "react";

export default function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <footer className="Palette-footer">
      {paletteName}
      <span classname="emoji">{emoji}</span>
    </footer>
  );
}
