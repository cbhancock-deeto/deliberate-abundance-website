import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  testimonialPage: {
    background: 'none',
    height: '100vh',
    backgroundColor: `${theme.palette.secondary.light}`,
  },
  titleText: {
    paddingTop: '5%',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '2rem',
  },
}));

function TestimonialSection() {
  const classes = useStyles();

  return (
    <div className={classes.testimonialPage}>
      <Typography className={classes.titleText}>TESTIMONIALS!!! :D</Typography>
    </div>
  );
}

export default TestimonialSection;
