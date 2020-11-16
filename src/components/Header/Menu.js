import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'white',
    },
    mItem: {
        width: 200,
        textAlign: 'center',
    }
  }));


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const classes=useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div>
    <IconButton edge="end" aria-controls="fade-menu" aria-haspopup="true"  onClick={handleClick} className={classes.menuButton} aria-label="menu">
    <MenuIcon />
  </IconButton>
      <Menu
        className={classes.menu}
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem className={classes.mItem} onClick={handleClose}>About</MenuItem>
            <Divider />
        <MenuItem className={classes.mItem} onClick={handleClose}>Testimonials</MenuItem>
            <Divider />
        <MenuItem className={classes.mItem} onClick={handleClose}>Contact</MenuItem>
    </Menu>
    </div>
  );
}