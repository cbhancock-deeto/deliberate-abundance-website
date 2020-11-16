import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '75ch',
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(1),
            width: '50ch',
      
    }
      }},
      contactHeading:{
            fontWeight: '500',
            fontSize: '2.25rem',
            textAlign: 'center',
            paddingBottom: 50,
            [theme.breakpoints.down("xs")]: {
              fontWeight: '500',
              fontSize: '2.25rem',
              textAlign: 'center',
              paddingBottom: 18,
        
      },
    }
}));



function Contact(){

    const classes = useStyles();
    return (

    <Grid container direction="column" justify="center" alignContent="center">
    <Typography className={classes.contactHeading}>CONTACT:</Typography>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="name" label="Your Name"  />
      </div>
      <div>
        <TextField
          id="email"
          label="Your Email"
        />
      </div>
      <div>
      <TextField
      id="message"
      multiline
      rows={7}
      size="medium"
      defaultValue="Your Message"
      variant="outlined"
    />
      </div>
    </form>
    </Grid>
    )
};

export default Contact;