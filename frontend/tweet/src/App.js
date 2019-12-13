import React from 'react';
import List from './components/List'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './util/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <List />
    </div>
    </MuiThemeProvider>
  );
}

export default App;
