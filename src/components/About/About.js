import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography } from '@material-ui/core';
import LukeOcean from './LukeOcean';
import aboutText from './aboutText';

const useStyles = makeStyles((theme) => ({
    aboutPage:{
        background: 'none',
        height: "100vh",
        backgroundColor: `${theme.palette.primary.light}`,
    },
    aboutContainer:{
        paddingTop: '10%',
        paddingRight: '5%',
    },
    aboutTitle: {
        paddingTop: '20%',
        fontWeight: '500',
        fontSize: '2rem',
    },
    aboutContent: {
        paddingTop: '5px',
        fontSize: '1.5rem',
        lineHeight: '1.2',

    }

}));

function About() {
    const classes= useStyles();

    return (<div className={classes.aboutPage}>
        <Grid container className={classes.aboutContainer}>
        <Grid item xs={1} md={1}/>
            <Grid item xs={10} md={4}>
                <LukeOcean />
            </Grid>
            <Grid item xs={10} md={5}>
            <Typography className={classes.aboutTitle}>{aboutText.about.title}</Typography>
            <Typography className={classes.aboutContent}>{aboutText.about.content}</Typography>
            </Grid>
        <Grid item xs={1} md={2}/>

        </Grid>
        </div>
    )

}


export default About;