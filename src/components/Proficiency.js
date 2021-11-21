import { Grid,Typography,useMediaQuery ,Button, Hidden} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import technologyAnimation from "../animation/build.json";
import Lottie from "react-lottie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faReact,faNode } from '@fortawesome/free-brands-svg-icons'
import nextjs from '../assets/nextjs.svg'
import { width } from '@mui/system';
import SkillsIcon from './ui/SkillsIcon';
import ProgressBar from './ui/ProgressBar';

const useStyles = makeStyles(theme => ({
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
  
 
  function Proficiency(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const mode = props.dark? '#FFFFFF' :'#171C28' ;
    
const testData = [
    {title:'Frontend/Design', bgcolor: "#1976D2", completed: 85 },
    {title:'Backend', bgcolor: "#1976D2", completed: 70 },
    { title:'UI/UX Design',bgcolor: "#1976D2", completed: 60 },
    { title:'Programming',bgcolor: "#1976D2", completed: 60 },
    { title:'Mobile/',bgcolor: "#1976D2", completed: 70 },
  ];
  
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: technologyAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    const Containerfirst = () =>{
      return(
      <Grid item sm>
      <Lottie
           options={defaultOptions}
           isStopped={false}
           style={{ maxWidth: "40em", margin: 0 }}
         />
      </Grid>
      )
    }
    const ContainerSecond = () =>{
      return (
        <Grid item container direction="column" sm style={{ maxWidth: "40em" }}>
        <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h2"
              gutterBottom
              style={{color:mode}}
            >
            Proficiency
            </Typography>
        </Grid>
        <Grid item>
        {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} title={item.title} />
      ))}
        </Grid>
       

      </Grid>
      )
    }

    return (
      <Grid container direction="column">

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "2em" }}
      >
       
     
        <ContainerSecond />
        <Hidden mdDown>
        <Containerfirst/>
        </Hidden>
        <Hidden mdUp>
        <Containerfirst/>
        </Hidden>
      </Grid>
     </Grid>
    );
}

export default Proficiency;


