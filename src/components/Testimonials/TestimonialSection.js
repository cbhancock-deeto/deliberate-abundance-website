import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import {Grid} from '@material-ui/core';
import Image1 from '../../assets/laurempicsum.jpg';
import Image2 from '../../assets/laurempicsum2.jpg';
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  testimonialContainer: {
    padding: 30,
    height: 500,
    backgroundColor: `${theme.palette.secondary.light}`,
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
  },
  testimonialImg: {
    width: '75%',
    borderRadius: '8%',
    maxHeight: 400,
  },
  testimonialContent: {
    paddingTop: '5px',
    fontSize: '1.5rem',
    lineHeight: '1.2',
    paddingBottom: 50,
  },
  testimonialTitle: {
    fontWeight: '500',
    fontSize: '2rem',
  },

}));


 
function TestimonialCarousel(props)
{
    var items = [
        {
          title: 'Lorem',
          body:
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
          img: Image1,
        },
        {
          title: 'Ipsum',
          body:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
          img: Image2,
        }
    ]
    
 
    return (
        <Carousel interval={6666}
          animation={"slide"}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
  const classes = useStyles();


    return (
      <Grid container justify="center">
      <Grid item md={4}>
        <img className={classes.testimonialImg} src={props.item.img} alt="testimonial img" />
      </Grid>

      <Grid item md={5}>
        <Typography className={classes.testimonialTitle}>{props.item.title}</Typography>
        <Typography className={classes.testimonialContent}>{props.item.body}</Typography>
      </Grid>
      </Grid>
    )
}



function TestimonialSection() {
  const classes = useStyles();

  
  return (
    <Grid container 
      justify="center"
      alignContent="center"
      className={classes.testimonialContainer} 
      >
      <Grid item xs={12}>
        <Typography className={classes.headingText}>TESTIMONIALS:</Typography>
      </Grid>
      <TestimonialCarousel />

      </Grid>
  );
}

export default TestimonialSection;
