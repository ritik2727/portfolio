import React, { useState ,useEffect,useContext} from 'react';
import { AppBar,Button,IconButton,List,ListItem,Menu,MenuItem,Tab,Tabs,SwipeableDrawer,Box } from '@mui/material';
import { Toolbar,useScrollTrigger ,ListItemText,Slide} from '@mui/material';
import { Switch } from '@mui/material';
import makeStyles  from '@mui/styles/makeStyles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'
import {Link} from 'react-router-dom'
import { createTheme } from '@mui/material';
import LandingPage from '../LandingPage';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import ScrollTop from './ScrollTop';
import logo from '../../assets/rj455.svg'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import './styles.css'
import { Link as ScrollLink } from "react-scroll";



import { DarkThemeContext } from '../../context/DarkThemeContext';


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
  }

  
  const useStyles = makeStyles((theme) => ({

  
    toolbarMargin: {
      ...theme.mixins.toolbar,
      // marginBottom: "3em",
      // [theme.breakpoints.down("md")]: {
      //   marginBottom: "2em"
      // },
      // [theme.breakpoints.down("xs")]: {
      //   marginBottom: "1.25em"
      // }
    },
    logo: {
      height: "8em",
      [theme.breakpoints.down("md")]: {
        height: "7em"
      },
      [theme.breakpoints.down("xs")]: {
        height: "5.5em"
      }
    },
    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    tabContainer: {
      marginLeft: "auto"
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
      color:'black',
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light
      }
    },
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      borderRadius: "0px"
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      "&:hover": {
        opacity: 1
      }
    },
    drawerIcon: {
      height: "50px",
      width: "50px"
    },
    drawerIconContainer: {
      marginLeft: "auto",
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    drawer: {
      backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
      ...theme.typography.tab,
      color: "white",
      opacity: 0.7
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
      "& .MuiListItemText-root": {
        opacity: 1
      }
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1
    },
  }));
  
  export default function Header(props) {

    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
  
    const [openDrawer, setOpenDrawer] = useState(false);
    const { dt} = useContext(DarkThemeContext)
    const [darkTheme,setDarkTheme] = dt;
    const handleChange = (e, newValue) => {
      props.setValue(newValue);
    };
  
 
  
   
    const routes = [
      { name: "Home",  activeIndex: 0,link:'home' },
      { name: "AboutMe",activeIndex: 1,link:'sks'},
      { name: "Skills", activeIndex: 2,link:'skills' },
      { name: "Work Experiences", activeIndex: 3,link:'experience' },
      { name: "ContactMe", activeIndex: 4 ,link:'skils'}
    ];
  
    useEffect(() => {
      [ ...routes].forEach(route => {
        switch (window.location.pathname) {
          case `${route.link}`:
            if (props.value !== route.activeIndex) {
              props.setValue(route.activeIndex);
              if (
                route.selectedIndex &&
                route.selectedIndex !== props.selectedIndex
              ) {
                props.setSelectedIndex(route.selectedIndex);
              }
            }
            break;

          default:
            break;
        }
      });
    }, [props.value, props.selectedIndex, routes, props]);
  
    const tabs = (
      <React.Fragment>
        <Tabs
          value={props.value}
          onChange={handleChange}
          className={classes.tabContainer}
          TabIndicatorProps={{  
            style: {
                display: "none",
            },
          }}
        >
          {routes.map((route, index) => (
       <ScrollLink to={route.link} smooth={true}>
            <Tab
              key={`${route}${index}`}
              className={classes.tab}
             
              // component={Link} to={route.link}
              
              style={{color:darkTheme ?  '#FFFFFF' : 'black',opacity:'80%'}}
              label={route.name}
            />
            </ScrollLink>

       
          ))}
        </Tabs>
        {/* <Switch style={{color:'blue', }} 
        
       
        /> */}
        <Button
          disableRipple
          // className={classes.button}
          value={darkTheme}
          onClick={() =>setDarkTheme(!darkTheme)} 
         
        >{darkTheme ?
          <img 
          src={moon}
           style={{width:25,height:25}} 

           />
           :
           <img 
           src={sun}
            style={{width:25,height:25}} 
 
            />
        }
        </Button>
      </React.Fragment>
    );
  
    const drawer = (
      <React.Fragment>
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          onOpen={() => setOpenDrawer(true)}
          classes={{ paper: classes.drawer }}
        >
          <div className={classes.toolbarMargin} />
          <List disablePadding>
            {routes.map(route => (
              <ListItem
                divider
                key={`${route}${route.activeIndex}`}
                button
                // component={Link}
                // to={route.link}
                selected={props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(route.activeIndex);
                }}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.name}
                </ListItemText>
              </ListItem>
            ))}
            <ListItem
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(5);
              }}
              divider
              button
              // component={Link}
              classes={{
                root: classes.drawerItemEstimate,
                selected: classes.drawerItemSelected
              }}
              // to="/estimate"
              selected={props.value === 5}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                Free Estimate
              </ListItemText>
            </ListItem>
          </List>
        </SwipeableDrawer>
        <IconButton
          className={classes.drawerIconContainer}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
        >
          <MenuIcon className={classes.drawerIcon} />
        </IconButton>
      </React.Fragment>
    );
              

    return (
      <React.Fragment>
        <ElevationScroll>
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar disableGutters id="back-to-top-anchor">
              <Button
                // component={Link}
                // to="/"
                disableRipple
                onClick={() => props.setValue(0)}
                className={classes.logoContainer}
                style={{color:'white'}}
              >
              <img src={logo} 
               style={{height:70,width:70,padding:'0.5em',marginLeft:'2em'}}
              />
              </Button>
              {matches ? drawer : tabs}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
  
      </React.Fragment>
    );
  }

  // https://cdn-icons-png.flaticon.com/512/2698/2698194.png

  // 'https://cdn-icons.flaticon.com/png/512/3106/premium/3106764.png?token=exp=1637247370~hmac=9ed4c84fc9b80f58fee1a5111a878ec8'