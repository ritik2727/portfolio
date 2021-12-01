import React,{useState,useContext ,Suspense} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine';
import LandingPage from './components/home/LandingPage';
import Skills from './components/skills/Skills';
import Header from "./components/ui/Header";
import './components/ui/styles.css'
import Proficiency from './components/skills/Proficiency';
import { DarkThemeContext } from './context/DarkThemeContext';
import ScrollTop from './components/ui/ScrollTop';
import Experiences from './components/experience/Experiences';


import Project from './components/projectmade/Project';
import ContactMe from './components/Contact/ContactMe';





function App(props) {
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0)

  
  const { dt,t} = useContext(DarkThemeContext)
  const [darkTheme] = dt;
  const [themeM] = t;



  

 
  return (
    <Suspense fallback={<div>loading</div>} >
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={themeM} >
  
      <div style={{backgroundColor:darkTheme? '#171C28' :'#FFFFFF' ,height:'100%',width:'100%',}}>
    <ScrollTop   showBelow={120} />
      <Header   
      {...props}
      value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}/>


     <LandingPage/>
    
       <Skills />
    <Proficiency /> 

  <Experiences />
<Project/>
<ContactMe />


     </div>

    </ThemeProvider>
    </StyledEngineProvider>
    </Suspense>
  );
}

export default App;


     
