import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid ,Fab } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
    icon:{
        color:'#F7F7F7'
    }
}));

function SocialMediaIcon(props) {
    const classes = useStyles();
    return (
        <>
         <Grid item container direction='row' justifyContent='center' alignItems='center' spacing={1} >
              <Grid item>
              <Fab 
              size="small"  
                aria-label="add" 
                style={{backgroundColor:'#333333',}}
                >
              <GitHubIcon className={classes.icon}   
                onClick={()=>window.open("https://github.com/ritik2727", '_blank')}
              />  
              </Fab>
              </Grid>
              <Grid item  >
              <Fab 
              size="small"  
                aria-label="add" 
                style={{backgroundColor:'#0E76A8',}}
                >
              <LinkedInIcon className={classes.icon}
                 onClick={()=>window.open("https://www.linkedin.com/in/ritik-jain-3b2208217", '_blank')}
               />  
              </Fab>
            
              </Grid>
              <Grid item  >
              <Fab 
              size="small"  
                aria-label="add" 
                style={{backgroundColor:'#EA4335',}}
                >
              <GoogleIcon className={classes.icon}
              onClick={()=>window.open('mailto:ritikjain2727@gmail.com', '_blank')}
              />  
              </Fab>
              </Grid>
              <Grid item>
              <Fab 
              size="small"  
                aria-label="add" 
                style={{backgroundColor:'#1DA1F2',}}
                >
              <TwitterIcon className={classes.icon}
                onClick={()=>window.open("https://twitter.com/Ritik2727", '_blank')}
               />  
              </Fab>
              </Grid>
            </Grid>
        </>
    );
}

export default SocialMediaIcon;