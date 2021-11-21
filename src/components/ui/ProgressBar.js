import { Typography } from "@mui/material";
import React from "react";
const ProgressBar = (props) => {
    const { bgcolor, completed ,title} = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
        <>
       <div>
           <Typography>
              {title}
           </Typography>
       </div>
      <div style={containerStyles}>
        <div style={fillerStyles} />
          {/* <span style={labelStyles}>{`${completed}%`}</span> */}
      </div>
      </>
    );
  };
  
  export default ProgressBar;