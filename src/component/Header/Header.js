import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from  '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  var isAppear = false;
  return (
    <Slide appear={isAppear} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({

  appbar: {
    background: 'none',
    fontFamily: "Nunito",

  }, appbarWrapper: {
    width: '80%',
    margin: '0 auto'
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }

}));
const Header = () => {

  
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <HideOnScroll>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1>Welcome.</h1>
        </Toolbar>
      </AppBar>
      </HideOnScroll>

    </div>
  );
}

export default Header;