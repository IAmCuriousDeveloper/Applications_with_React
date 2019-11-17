import React from "react";
import seedColors from "./seedColors";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
function App() {
  // generate palette just take any palette and convert it into new palette with different shades
  return (
    <div>
      <Palette palette={generatePalette(seedColors[6])} />
    </div>
  );
}

export default App;
