import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import {Grid} from '@material-ui/core';
import MarkyImg from '../../assets/marky.jpg';
import MarkyImg2 from '../../assets/marky2.jpg';
import Carousel from 'react-material-ui-carousel'
// import Testimonial from './Testimonial';

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
          title: 'Marky Mark Wahlberg!',
          body:
              'He always wanted to be sexy like Luke...  He came close, but Luke beats him by two points',
          img: MarkyImg,
        },
        {
          title: 'Marky Mark Wahlberg!',
          body:
              'He always wanted to be sexy like Luke...  He came close, but Luke beats him by two points',
          img: MarkyImg2,
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
        <img className={classes.testimonialImg} src={props.item.img}/>
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

      {/*
      <Grid item md={4}>
        <img className={classes.testimonialImg} src={MarkyImg}/>
      </Grid>

      <Grid item md={5}>
        <Typography className={classes.testimonialTitle}>{title}</Typography>
        <Typography className={classes.testimonialContent}>{body}</Typography>
      </Grid>*/}

      </Grid>
  );
}

export default TestimonialSection;
