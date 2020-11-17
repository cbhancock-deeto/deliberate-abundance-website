import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../../assets/DAL_Logo.png';
//import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
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
  return (
    <AppBar elevation={0} color="transparent">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <img className={classes.logo} src={logo} alt={'logo'} />
        </Typography>
          {/*<Menu/>*/}
      </Toolbar>
    </AppBar>
  );
}
