import React from "react";
import seedColors from "./seedColors";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
function App() {
  console.log();
  return (
    <div>
      <Palette palette={generatePalette(seedColors[6])} />
    </div>
  );
}

export default App;
