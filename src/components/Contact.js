import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import {Button} from '@material-ui/core';


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
    },
      recaptcha:{
        paddingTop: 5,
        paddingLeft: 15,
      },
      subButton:{
        marginTop: 5,
        marginLeft: 15,
        marginBottom: 20
      },
      contactBackground:{
        backgroundColor: `${theme.palette.primary.light}`,
      }
}));

function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_x9rqx4s', 'template_74npasl', e.target, 'user_Wukm2xVv5xx1ZNXiQnAVN')
          .then((result) => {
              alert(result.text);
          }, (error) => {
              alert(error.text);
          });
          e.target.reset();
      }



function Contact(){
  const [valid, setValid] = useState(true);

  function onChange(value) {
    setValid(valid => !valid)
  }


    const classes = useStyles();
    return (

    <Grid container className={classes.contactBackground} direction="column" justify="center" alignContent="center">
    <Typography className={classes.contactHeading}>CONTACT:</Typography>
    <form className={classes.root} noValidate autoComplete="off" onSubmit={sendEmail} >
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
      <ReCAPTCHA 
        className={classes.recaptcha}
        sitekey="6LcTRuMZAAAAAAzy_ecossXZStEU0HEfKhFzC9gR"
        onChange={onChange} />
      <Button 
        className={classes.subButton} 
        disabled={valid} 
        variant="contained" 
        type="submit">
          Submit</Button>
    </form>
    
    </Grid>
    )
};

export default Contact;