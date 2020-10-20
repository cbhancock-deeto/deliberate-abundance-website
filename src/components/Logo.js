import React from 'react';
import logo from '../images/logo.png';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    logo: {
        height: '100%',
        width: '135px',
    }
}));

function Logo() {
    const classes= useStyles();

    return(
        <img className={classes.logo} src={logo} alt={"logo"} />
    )
}

export default Logo;



