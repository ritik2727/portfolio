import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid,Typography } from '@mui/material';
import nextjss from '../../assets/nextjss.svg'
import nodejs from '../../assets/nodejs.svg'
import cplus from '../../assets/cplus.svg'
import c from '../../assets/c.svg'
import reactjs from '../../assets/reactjs.svg'
import bootstrap from '../../assets/bootstrap.svg'
import css3 from '../../assets/css3.svg'
import express from '../../assets/express.svg'
import firebase from '../../assets/firebase.svg'
import git from '../../assets/git.svg'
import html5 from '../../assets/html5.svg'
import javascript from '../../assets/javascript.svg'
import materialui from '../../assets/materialui.svg'
import mongodb from '../../assets/mongodb.svg'

import python from '../../assets/python.svg'
import redux from '../../assets/redux.svg'
import '../ui/styles.css'


const useStyles = makeStyles(theme => ({
    rowContainer: {
      paddingLeft: "5em",
      paddingRight: "5em",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em"
      }
    },
    iconContainer: {
      "&:hover $icon": {
          color: '#1976D2',
      }
  },
    icon:{
      color:'#868E96',
        "&:hover":{
           color:'#1976D2'
       }
    }
  }));

const skillslogo = [
    {
        id:1,
        logo:reactjs,
        title:'Reactjs'
    },
    {
        id:2,
        logo:nodejs,
        title:'Nodejs'
    },
    {
        id:3,
        logo:express,
        title:'Express'
    },
    {
        id:4,
        logo:mongodb,
        title:'MongoDB'
    },
    {
        id:5,
        logo:redux,
        title:'Redux'
    },
    {
        id:6,
        logo:nextjss,
        title:'Nextjs'
    },
    {
        id:7,
        logo:materialui,
        title:'MaterialUI'
    },
    {
        id:8,
        logo:bootstrap,
        title:'Bootstrap'
    },
    {
        id:8,
        logo:html5,
        title:'html5'
    },
    {
        id:9,
        logo:css3,
        title:'css3'
    },
    {
        id:10,
        logo:cplus,
        title:'C++'
    },
    {
        id:11,
        logo:c,
        title:'C'
    },
    {
        id:12,
        logo:python,
        title:'Python'
    },
    {
        id:13,
        logo:javascript,
        title:'javascript'
    },
    {
        id:14,
        logo:firebase,
        title:'Firebase'
    },
    {
        id:15,
        logo:git,
        title:'git'
    }
]

function SkillsIcon(props) {
    const classes = useStyles();
    return (
     <>
    <Grid 
        item 
        container 
        direction='row' 
        justifyContent='center' 
        alignItems='center'
        spacing={2} 
    >
         {skillslogo.map((item)=>(
        <Grid item>
            <Grid item container direction='column' className={classes.iconContainer}  justifyContent='center' 
        alignItems='center'>
                <Grid item > 
                    <img src={item.logo} className="close"
                        style={{height:40,width:40}}
                    
                    />
                </Grid>
                <Grid item>
                    <Typography 
                        variant='body2' 
                        className={classes.icon}
                        style={{textAlign:'center'}}
                    >
                        {item.title}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
         ))}
    </Grid>
     </>
    );
}

export default SkillsIcon;


{/* <Grid item>
<Grid item container direction='column' className={classes.iconContainer}>
  
  <Grid item > 
<FontAwesomeIcon icon={faNode} color='#868E96'  className={classes.icon}    size='2x' />
</Grid>
<Grid item>
<Typography variant='body2' className={classes.icon}>reactjs</Typography>
</Grid>
</Grid>
</Grid> */}