// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { ThemeProvider } from '@mui/material/styles';
import React,{useEffect,useState,useContext} from 'react';
import { ThemeProvider ,createTheme} from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine';

import { BrowserRouter,Route ,Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Skills from './components/Skills';
import Header from "./components/ui/Header";
import { ClipLoader } from 'react-spinners';
import './components/ui/styles.css'
import { BoltLoader } from "react-awesome-loaders";
import Proficiency from './components/Proficiency';
import { DarkThemeContext } from './context/DarkThemeContext';


function App(props) {
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0)

  const [loading,setLoading] = useState(false)
  const { dt,t} = useContext(DarkThemeContext)
  const [darkTheme,setDarkTheme] = dt;
  const [themeM] = t;

  

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])
  return (
    <div>
{loading ?
<div class='loder'>
    <BoltLoader
        className={"loaderbolt"}
        boltColor={"#FBFF00"}
        backgroundBlurColor={"#E0E7FF"}
      />
  </div>
  :
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={themeM} >

      <div style={{backgroundColor:darkTheme? '#171C28' :'#FFFFFF' ,height:'100%',width:'100%'}}>
 
      <Header   
      {...props}
      value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}/>

       
    <LandingPage/>
    
       <Skills />
    <Proficiency />
     </div>

    </ThemeProvider>
    </StyledEngineProvider>
}
</div>
  );
}

export default App;


