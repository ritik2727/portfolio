// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { ThemeProvider } from '@mui/material/styles';
import React,{useEffect,useState} from 'react';
import { ThemeProvider ,createTheme} from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine';


import { BrowserRouter,Route ,Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Skills from './components/Skills';
import darkTheme from './components/ui/DarkTheme';
import Header from "./components/ui/Header";
import ThemeV from './components/ui/Theme';
import theme from "./components/ui/Theme";
import { ClipLoader } from 'react-spinners';
import './components/ui/styles.css'
import { BoltLoader } from "react-awesome-loaders";
import Proficiency from './components/Proficiency';

function App(props) {
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0)
  const [dark, setDark] = useState( getDefaultTheme)
  const [loading,setLoading] = useState(false)
  
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark))
  }, [dark])
  
  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem('dark'))
    return selectedTheme || false
  }
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
    <ThemeProvider theme={dark ? darkTheme : theme} dark={dark}
      setDark={setDark}>

      <div style={{backgroundColor:dark? '#171C28' :'#FFFFFF' ,height:'100%',width:'100%'}}>
 
      <Header   
      {...props}
      dark={dark}
      setDark={setDark}
      value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}/>

       
    <LandingPage   {...props}
      dark={dark}
      setDark={setDark}
      />
    
       <Skills {...props}
      dark={dark}
      setDark={setDark}
     
      />
    <Proficiency 
    {...props}
    dark={dark}
    setDark={setDark}
    />
     </div>

    </ThemeProvider>
    </StyledEngineProvider>
}
</div>
  );
}

export default App;
