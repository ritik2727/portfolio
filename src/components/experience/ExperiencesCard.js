import  React,{useContext} from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Colors from '../../colors/Colors';
import { DarkThemeContext } from '../../context/DarkThemeContext';

export default function ExperiencesCard({role,company,date,desc}) {
  const { dt} = useContext(DarkThemeContext)
  const [darkTheme] = dt;
  const bordercolor = darkTheme?Colors.SubWhite :Colors.SubBlack;
  return (
    <Box
        justifyContent='center'
        alignItems='center'
    style={{padding:'1em'}}
      sx={{
        maxWidth: 400,
        height: 250,
        backgroundColor: 'transprant',
        borderRadius:5,
        border: `1px solid  ${bordercolor} `
      
      }}
    >
    <Typography variant='h4' style={{color:Colors.blue,textAlign:'center',marginBottom:'1em'}}>
     {company}
    </Typography>
    <Typography variant='h5' style={{textAlign:'center',marginBottom:'0.5em'}}>
      {role}
    </Typography>
    <Typography variant='h6' style={{textAlign:'center',marginBottom:'0.5em',}}>
     {date}
    </Typography>
    <Typography variant='subtitle2' 
    style={{color:darkTheme? Colors.SubWhite :Colors.SubBlack ,textAlign:'center',fontSize:'1em',marginTop:'0.5em'}}>
      {desc}
    </Typography>
    </Box>
  );
}