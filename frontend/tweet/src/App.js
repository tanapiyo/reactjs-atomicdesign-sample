import React from "react";
import List from "./components/List";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./util/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <div className="App">
          <List />
        </div>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
