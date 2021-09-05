import React, { useState,useEffect } from 'react';


import { CssBaseline } from '@material-ui/core';
import Education from './Education';
import ProjectItem from './ProjectItem';
import Contact from './Contact';
import Footer from './component/Footer/Footer';
import { Collapse } from '@material-ui/core';

import './App.css';

import Header from './component/Header/Header'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import background from './images/gaming.jpg';
import { IconButton } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '80vh',
    maxHeight:'1000px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',


  }, secondHeader: {
    background: 'none',
    fontFamily: "Nunito",
    textAlign: 'center',
    fontSize: '2rem',
    color: 'white',

  }, goDown: {
    color: 'white',
    fontSize: '4rem'

  }

}));

function App() {
  const [checked,setChecked]=useState();
  const classes = useStyles(false);
useEffect(()=>{
  setChecked(true);
},[])
  return (


    <div  >
  
      
        <div className={classes.root} style={{ backgroundImage: `url(${background})` }}>
          <CssBaseline />
          <Collapse in={checked}  {...(true ? { timeout: 1000 } : {})} collapsedSize={50}>
          <h1 className={classes.secondHeader}><br/>Hi, I`m Eden Bar.<br/> Junior Full-Stack developer.<br/> 3rd year Computer Science student and Full-Stack bootcamp graduate.<p><IconButton>

            <ExpandMoreIcon className={classes.goDown} />
          </IconButton></p> </h1>
          </Collapse>
        </div>
        
        <Header  />
        <Education></Education>
        <ProjectItem></ProjectItem>
        <Contact />
        <Footer></Footer>
        
    </div>


  );
}

export default App;
