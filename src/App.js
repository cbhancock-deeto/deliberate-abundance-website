import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Root from './Root';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#68b0ba',
      light: '#badee3',
    },
    secondary: {
      main: '#35af4a',
      light: '#95eda5',
    }
  },
  typography: {
    fontFamily: "'Alegreya Sans', sans-serif"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}



export default App;
