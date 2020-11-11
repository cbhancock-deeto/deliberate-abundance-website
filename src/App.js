import React from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';
import Header from './components/Header';
import About from './components/About/About';
import TestimonialSection from './components/Testimonials/TestimonialSection';
import { Grid, Typography, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#68b0ba',
      light: '#badee3',
    },
    secondary: {
      main: '#35af4a',
      light: '#95eda5',
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
  landingPageTitle: {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: '300',
    color: `${theme.palette.secondary.light}`,
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
          <Typography className={classes.landingPageTitle}>
            Be well. Live well.
          </Typography>
        </Grid>
        <About className={classes.about} />
        <TestimonialSection />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
