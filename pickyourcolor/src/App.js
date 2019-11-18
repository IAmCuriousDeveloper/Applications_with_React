import React from "react";
import seedColors from "./seedColors";
import Palette from "./Palette";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
function App() {
  // generate palette just take any palette and convert it into new palette with different shades
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>palette list</h1>} />
      <Route
        exact
        path="/palette/:pid"
        render={() => <h1>palette individual</h1>}
      />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[6])} />
    // </div>
  );
}

export default App;
