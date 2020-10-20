import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
    appbar:{
        background: 'none',
        maxHeight: "100px",
    },
    appbarTitle:{
        flexGrow:'1',
        opacity: "1",
        fontWeight: "500",
        color: `${theme.palette.secondary.main}`,
    },
    appbarLogo:{
        maxHeight: '120px',
    },
    appbarWrapper:{
        width:"94%",
        margin:'0 auto',
    },
    icon:{
        color: `${theme.palette.secondary.light}`,
        fontSize:"2rem",
    },

}));

export default function Header () {
    const classes= useStyles();

    return( 
        <div>
            <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}><Logo className={classes.appbarLogo}/></h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}