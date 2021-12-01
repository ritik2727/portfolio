import React from "react";

import Form from './Form';
import { useTheme ,Grid ,useMediaQuery,Hidden} from "@mui/material";

import mailAnimation from "../../animation/email.json";
import DisplayLottie from "../displayLottie/DisplayLottie";



export default function ContactMe(props) {
 
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <Grid container direction='row' style={{paddingBottom:'3em'}}>
      <Form />
      <Hidden lgDown>
            <Grid 
                item 
                container 
                direction={matchesMD ? 'column' : 'row'}
                // className={classes.background} 
                alignItems='center'
                justifyContent={matchesMD ? 'center' : undefined}
                lg={7}
                xl={8}
            >
                 <Grid item>
                 <DisplayLottie animationData={mailAnimation} />
                </Grid> 
            </Grid>
        </Hidden>
    </Grid>
  );
}




