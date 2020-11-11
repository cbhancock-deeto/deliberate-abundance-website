import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import LukeImg from '../../assets/lukeocean.jpg';

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    padding: 30,
    height: 600,
  },
  aboutTitle: {
    fontWeight: '500',
    fontSize: '2rem',
  },
  aboutContent: {
    paddingTop: '5px',
    fontSize: '1.5rem',
    lineHeight: '1.2',
  },
  aboutImg: {
    width: '75%',
    borderRadius: '50%',
    maxWidth: 300,
  },
}));

function About() {
  const classes = useStyles();
  const title = 'About the sexy, sexy founder:';
  const body =
    'Long ago, Luke strived to be sexier than anyone, ever before... AND THEN HE WAS.  This babe is the handsomest, delightfulest creature in the whole wide world.  He has blond hair that makes dem bois go wild!';

  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className={classes.aboutContainer}
    >
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
