import React from "react";
import seedColors from "./seedColors";
import Palette from "./Palette";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";
// generate palette just take any palette and convert it into new palette with different shades

class App extends React.Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[6])} />
      // </div>
    );
  }
}

export default App;
