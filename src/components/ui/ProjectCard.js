import React,{useContext} from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Colors from '../../colors/Colors';
import { padding } from '@mui/system';
import { DarkThemeContext } from '../../context/DarkThemeContext';

function ProjectCard(props) {
    const { dt} = useContext(DarkThemeContext)
    const [darkTheme,setDarkTheme] = dt;
    const bordercolor = darkTheme?Colors.SubWhite :Colors.SubBlack;
    return (
        <div style={{paddingLeft:500,paddingBottom:20}}>
        <Box
            justifyContent='center'
            alignItems='center'
            sx={{
            maxWidth: 400,
            height: 300,
            backgroundColor: 'transprant',
            borderRadius:5,
            border: `1px solid  ${bordercolor} `,
            overflow:'hidden'
            }}
        >
          <img  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"  
            style={{maxWidth:400,maxHeight:300}}
           />
           <Typography>
               kfe
           </Typography>
      </Box>
        </div>
    );
}

export default ProjectCard;