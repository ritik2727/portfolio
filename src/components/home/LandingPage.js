import { Grid } from '@mui/material';
import React from 'react';
import { Typography , Button,useMediaQuery} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import animationData from "../../animation/programmer.json";
import Lottie from "react-lottie";
import Typewriter from 'typewriter-effect';
import SocialMediaIcon from '../ui/SocialMediaIcon';







const useStyles = makeStyles((theme,darkTheme) => ({
  // chabge
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1em",
      paddingRight: "1em"
    }
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
// /    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    fontFamily:'Roboto',
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 20,
      width:110
    }
  },
  buttonContainer: {
    marginTop: "1em"
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
    [theme.breakpoints.down("sm")]: {
      marginRight: 20,
      width:110
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    }
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    }
  },
  heroTextContainer: {
    minWidth: "20em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  specialText: {
    fontFamily: 'sans-serif',
    color:'#1976D2'
  },
  subtitle: {
    marginBottom: "1em"
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  },


  }));
  

function LandingPage(props) {
    const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
    return (
      <Grid container direction='column' id='home' >
      <Grid
      container
      direction={matchesMD ? "column" : "row"}
      alignItems="center"
      justifyContent='center'
      className={classes.rowContainer}
      style={{ marginTop: "5em", marginBottom: "10em" }}
    >
      <Grid item container direction="column" md style={{ maxWidth: "40em" }}>
        <Grid item>
        <Typography variant="h4" align="center"  
           
            >
              Hello, I'M {" "}<span className={classes.specialText}>Ritik Jain</span>
            
            </Typography>
            <Typography variant="h2" align="center"  
            >
                <Typewriter
                options={{
                  strings: ['Freelance Web Developer','Full Stack Developer', 'React/React Native ','MERN Stack dev'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </Typography>
           
              <SocialMediaIcon />
            </Grid>
              <Grid
              item
              container
              justifyContent="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  className={classes.estimateButton}
                  variant="contained"
                  style={{backgroundColor: '#1976D2',color:'#FFFFFF' }}
                  onClick={() => props.setValue(5)}
                >
                  ContactMe
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.learnButtonHero}
                  style={{backgroundColor: '#1976D2',color:'#FFFFFF'  }}
                  variant="contained"
                >
                 Resume
                </Button>
              </Grid>
            </Grid>
      </Grid>
      <Grid item container justifyContent={matchesMD ? "center" : "flex-end"} md>
        <Lottie
          options={defaultOptions}
          isStopped={false}
          style={{ maxWidth: "40em", margin: 0 }}
        />
      </Grid>
    </Grid>
    </Grid>
    );
}

export default LandingPage;