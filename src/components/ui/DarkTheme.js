import { createTheme, ThemeProvider, styled } from '@mui/material';



const arcBlue = '#171C28';
const arcOrange = '#FFBA60';
const arcGrey ='#868686'
const arcBlack = '#000000'
 
export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    }
  },
  typography:{
      tab:{
        fontFamily:'Raleway',
        textTransform:'none',
        fontWeight:700,
        fontSize:'1rem',
        color:arcBlack
      },
      estimate:{
        fontFamily:'Pacifico',
        fontSize:'1rem',
        textTransform:'none',
        color:arcBlack
      },
      h2:{
        fontFamily:'Raleway',
        fontWeight:700,
        fontSize:'2.5rem',
        color:arcBlack,
        lineHeight:1.5
      },
      h3: {
        fontFamily: "Pacifico",
        fontSize: "2.5rem",
        color: arcBlack
      },
      h4:{
        fontFamily:'Raleway',
        fontSize:'1.75rem',
        color:arcBlack,
        fontWeight:700
      },
      h6: {
        fontWeight: 500,
        fontFamily: "Raleway",
        color: arcBlack,
        lineHeight:1
      },
      subtitle1:{
        fontSize:'1.25rem',
        fontWeight:300,
        color:arcGrey
      },
      subtitle2: {
        color: "white",
        fontWeight: 300,
        fontSize: "1.25rem"
      },
      body1: {
        fontSize: "1.25rem",
        color: arcGrey,
        fontWeight: 300
      },
      caption: {
        fontSize: "1rem",
        fontWeight: 300,
        color: arcGrey
      },
      learnButton: {
        borderColor: arcBlack,
        borderWidth: 2,
        textTransform: "none",
        color: arcBlack,
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold"
      }
  },
  components :{
    MuiInputLabel:{
      styleOverrides:{
        root:{
          color:arcBlue,
          fontSize:'1rem'
        }
    }
    },
    MuiInput:{
      styleOverrides:{
      root: {
        color: arcGrey,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`
        }
      }
    }
  }
  }
});
