// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { ThemeProvider } from '@mui/material/styles';

import { ThemeProvider ,createTheme} from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine';

import React,{useState,useEffect} from "react";
import { BrowserRouter,Route ,Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Skills from './components/Skills';
import darkTheme from './components/ui/DarkTheme';
import Header from "./components/ui/Header";
import ThemeV from './components/ui/Theme';
import theme from "./components/ui/Theme";

function App(props) {
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0)
  const [dark, setDark] = useState(true)
  
  useEffect(() => {
    setDark(dark)
  })
  return (
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
      setDark={setDark}/>
    
       <Skills {...props}
      dark={dark}
      setDark={setDark}/>
     </div>
    </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
