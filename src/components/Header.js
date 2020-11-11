// import React, { useState, useEffect } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/DAL_Logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: '190px',
    paddingTop: 15,
  },
}));

export default function Header() {
  const classes = useStyles();
  //   const [myVariable, updateMyVariable] = useState(0);
  //   const [myVariable, updateMyVariable] = useState(true);
  //   const [myVariable, updateMyVariable] = useState('sdfsadf');
  //   const [myVariable, updateMyVariable] = useState([]);

  //   useEffect(() => {
  //     updateMyVariable(6);
  //   }, [someVariable]); // Empty brackets mean that this useEffect will only run once when the page loads.

  return (
    <AppBar elevation={0} color="transparent">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <img className={classes.logo} src={logo} alt={'logo'} />
        </Typography>
        <IconButton edge="end" className={classes.menuButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
