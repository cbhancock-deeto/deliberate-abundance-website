import React from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';
import Header from './components/Header/Header';
import About from './components/About/About';
import TestimonialSection from './components/Testimonials/TestimonialSection';
import { Grid, Typography, CssBaseline } from '@material-ui/core';
import Contact from './components/Contact';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#68b0ba',
      light: '#ededed',
    },
    secondary: {
      main: '#35af4a',
      light: '#fffaeb',
    },
  },
  typography: {
    fontFamily: "'Alegreya Sans', sans-serif",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '75vh',
    backgroundImage: `url(${
      process.env.PUBLIC_URL + '/assets/reachingforlight.jpg'
    })`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  beWell: {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: '300',
    color: '#35af4a',
    paddingTop: 250,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Header />
        <Grid item className={classes.root}>
          <CssBaseline />
          <Typography className={classes.beWell}>
            Be well. Live well.
          </Typography>
        </Grid>
        <About />
        <TestimonialSection />
        <Contact />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
