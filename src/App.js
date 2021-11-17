// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { ThemeProvider } from '@mui/material/styles';

import { ThemeProvider ,createTheme} from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine';

import React,{useState} from "react";
import { BrowserRouter,Route ,Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import DarkTheme from './components/ui/DarkTheme';
import Header from "./components/ui/Header";
import ThemeV from './components/ui/Theme';
import theme from "./components/ui/Theme";

function App(props) {
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0)
  const [dark, setDark] = useState(false)


  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={dark ? DarkTheme : theme} dark={dark}
      setDark={setDark}>
      <BrowserRouter>

      
      <Header   
      {...props}
      dark={dark}
      setDark={setDark}
      value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}/>

       

      </BrowserRouter>
      
    </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
