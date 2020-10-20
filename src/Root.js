import { RootRef } from '@material-ui/core';
import React from 'react';
import { Typography, CssBaseline} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/reachingforlight.jpg'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    landingPageTitle: {
        textAlign: 'center',
        paddingTop: "27%",
        fontSize: "3rem",
        fontWeight: "300",
        color: `${theme.palette.secondary.light}`,
        lineHeight: "0",
    },
    about: {
        minHeight: '100vh',
    }
}));

function Root() {

    const classes = useStyles();

    return (<div>
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Typography className={classes.landingPageTitle}>Be well. Live well.</Typography>
            
        </div>
        <About className={classes.about}/>
        <Testimonials />
        </div>
    );
}

export default Root;