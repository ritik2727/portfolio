import React,{useContext} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProjectCard.scss'
import './ProjectCard.css'
import './ProjectCard.css.map'
import {Typography } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import Colors from '../../colors/Colors';
import { DarkThemeContext } from '../../context/DarkThemeContext';
import { useTheme,useMediaQuery } from '@mui/material';



const  ProjectCard = ({name,desc,image,gitLink,appLink}) => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const { dt} = useContext(DarkThemeContext)
    const [darkTheme] = dt;
  
    return (

        <div style={{width:matchesSM?'18.2em' :'25em'}} className='card-wrapper'>
                <div className="card">
                    <div className="card-image">
                        <img src={image} alt={name} />
                    </div>
                    <div className='card-title' style={{backgroundColor:Colors.blue}}>
                      <Typography align='center' variant='h5' style={{color:Colors.white}}>
                          {name}
                        </Typography>
                    </div>
                    
                    <ul className="social-icons">
                        <li><a href={appLink}><PreviewIcon className='fa' /></a></li>
                        <li><a href={gitLink}><i className="fa fa-code"></i></a></li>
                    </ul>
                    <div className="details" style={{backgroundColor:darkTheme ? Colors.white : Colors.BDark}}>
                        {/* <h2>  */}
                        <Typography 
                        variant='h6'
                        style={{
                                marginTop:30,textAlign:'center',fontSize:'1rem',
                                paddingRight:'1em',paddingLeft:'1em',
                                color:darkTheme?Colors.Black :Colors.white
                            }}
                         >
                        {desc}
                        </Typography>
                            {/* <span className="job-title">
</span> */}
                        
                    </div>
                </div>
                </div>
  
    )
}

export default ProjectCard;