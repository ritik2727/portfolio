import React,{useContext} from 'react';
import { Grid,Typography,useMediaQuery,useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExperiencesCard from './ui/ExperiencesCard';
import { DarkThemeContext } from '../context/DarkThemeContext';

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: '2em',
        paddingRight: '2em',
        paddingTop: '2em',
        paddingBottom: '10em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1em',
            paddingRight: '1em',
            paddingTop: '1em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '0.5em',
            paddingRight: '0.5em',
            paddingTop: '0.5em',
        }
    },
}))
const experience = [
      {
        role: "Web Developer Intern",
        company: "The Spark Foundation",
  
        date: "Aug 2021 - Sep 2021",
        desc:"Worked On Banking System In This Basic History Of Transcation Is Stored In The Database And Users Can Make Transcation.",
        descBullets: [
          "Developing Portal for Student's Interactive with the Teachers.",
          "Designing User Interface of the Application"
        ]
      },
      {
        role: "Open Source Contributor",
        company: "Code For Cause",
        companylogo: 'd',
        date: "May 2021 – Present",
        desc: "One stop destination for showcasing the community you have built.",
        descBullets: [
          "Developing Interfaces in accordance with UI Design.",
          "Fixing Design Bugs within the Application."
        ]
      },
      {
        role: "Freelancer",
        company: "Eduplug",
        companylogo: 'fa',
        date: "April 2021 – Present",
        desc: "Building Creative Designs for the different clients.",
        descBullets: [
          "Building Creative Designs for the dedicated clients of the company."
        ]
      }
    ]

function Experiences(props) {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const { dt} = useContext(DarkThemeContext)
    const [darkTheme,setDarkTheme] = dt;

    return (
        <Grid 
        id='experience'
        Container 
        direction='column' 
        alignItems='center' 
        justifyContent='center' 
        className={classes.rowContainer}
        >
        <Grid item style={{marginBottom:'4em'}}>
            <Typography  variant='h2' align='center' >Experiences</Typography>
        </Grid>
        <Grid 
            item 
            container 
            direction={matchesMD ? 'column' : 'row'}
            alignItems='center' 
            justifyContent='center' 
            spacing={4}
        >
            {experience && experience.map((doc) =>(
                
                <Grid item   >
                   <ExperiencesCard 
                        role={doc.role}
                        company={doc.company}
                        date={doc.date}
                        desc={doc.desc}
                   />
                </Grid>
            ))}      
        </Grid>
    </Grid>
    );
}

export default Experiences;