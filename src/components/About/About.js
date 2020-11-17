import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import LukeImg from '../../assets/lukeocean.jpg';

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    padding: 30,
    height: 500,
    backgroundColor:`${theme.palette.primary.light}`
  },
  aboutTitle: {
    fontWeight: '500',
    fontSize: '2rem',
  },
  aboutContent: {
    paddingTop: '5px',
    fontSize: '1.5rem',
    lineHeight: '1.2',
    [theme.breakpoints.down("xs")]: {
      paddingTop: '0',
      fontSize: '1.2rem',
      lineHeight: '1.1',
      paddingBottom: 0,
  },
},
  aboutImg: {
    width: '75%',
    borderRadius: '50%',
    maxWidth: 300,
  },
  headingText: {
    fontWeight: '500',
    fontSize: '2.25rem',
    textAlign: 'center',
    paddingBottom: 50,
    [theme.breakpoints.down("xs")]: {
      fontWeight: '500',
      fontSize: '2.25rem',
      textAlign: 'center',
      paddingBottom: 18,
    }
  }
}));
 
function About() {
  const classes = useStyles();
  const title = 'Luke Palmer';
  const body =
    'Founder of Deliberate Abundance - "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae';

  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className={classes.aboutContainer}
    >
      <Grid item xs={12}>
        <Typography className={classes.headingText}>ABOUT: </Typography>
      </Grid>
      <Grid item md={4}>
        <img className={classes.aboutImg} src={LukeImg} alt="Luke / CEO" />
      </Grid>
      <Grid item md={5}>
        <Typography className={classes.aboutTitle}>{title}</Typography>
        <Typography className={classes.aboutContent}>{body}</Typography>
      </Grid>
    </Grid>
  );
}

export default About;
