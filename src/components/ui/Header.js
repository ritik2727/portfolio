import React, { useState ,useEffect} from 'react';
import { AppBar,Button,IconButton,List,ListItem,Menu,MenuItem,Tab,Tabs,SwipeableDrawer } from '@mui/material';
import { Toolbar,useScrollTrigger ,ListItemText,Slide} from '@mui/material';
import { Switch } from '@mui/material';
import makeStyles  from '@mui/styles/makeStyles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'
import {Link} from 'react-router-dom'
import { createTheme } from '@mui/material';
import LandingPage from '../LandingPage';
function ElevationScroll(props) {
    const { children } = props;
  
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }
  
  const useStyles = makeStyles((theme) => ({

  
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3em",
      [theme.breakpoints.down("md")]: {
        marginBottom: "2em"
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "1.25em"
      }
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
      color:'black'
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
    }
  }));
  
  export default function Header(props) {

    const classes = useStyles(props);
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
  
    const [openDrawer, setOpenDrawer] = useState(false);

  
    const handleChange = (e, newValue) => {
      props.setValue(newValue);
    };
  
 
  
   
    const routes = [
      { name: "Home", link: "/", activeIndex: 0 },
      { name: "AboutMe",link: "/services",activeIndex: 1},
      { name: "Skills", link: "/revolution", activeIndex: 2 },
      { name: "Work Experiences", link: "/about", activeIndex: 3 },
      { name: "ContactMe", link: "/contact", activeIndex: 4 }
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
          case "/estimate":
            props.setValue(5);
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
          indicatorColor="primary"
        >
          {routes.map((route, index) => (
            <Tab
              key={`${route}${index}`}
              className={classes.tab}
              component={Link}
              to={route.link}
              style={{color:props.dark ? 'black' :'#FFFFFF',opacity:'70%'}}
              label={route.name}
            />
          ))}
        </Tabs>
        <Switch style={{color:'white' }} checked={props.dark} onChange={() =>props.setDark(!props.dark)} />
        {/* <Button
          component={Link}
          to="/estimate"
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => props.setValue(5)}
        >
          kh
        </Button> */}
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
                component={Link}
                to={route.link}
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
              component={Link}
              classes={{
                root: classes.drawerItemEstimate,
                selected: classes.drawerItemSelected
              }}
              to="/estimate"
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
            <Toolbar disableGutters>
              <Button
                component={Link}
                to="/"
                disableRipple
                onClick={() => props.setValue(0)}
                className={classes.logoContainer}
                style={{color:'white'}}
              >
                 Ritik Jain 
              </Button>
              {matches ? drawer : tabs}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        <LandingPage />
      </React.Fragment>
    );
  }
