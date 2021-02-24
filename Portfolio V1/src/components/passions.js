import React from "react";
// MUI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import  Typography  from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";
// 


const styles = makeStyles ((theme) => ({
   


}));

export default function Passions() {
	const classes = styles();
	const theme = useTheme();
    // media queries
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

	return (
		<React.Fragment>
			<Typography variant="h2" align="left" style={{textAlign: "center", margin: "5rem", position: "relative", top: "15rem"}}>
                    My passions
                </Typography>
                <Typography variant="h6" align={matchesSM ? "center" : "left"} style={{textAlign: "center",fontWeight: "lighter", margin: "40px",position: "relative", top: "12rem"}}>
                    In this area I will talk more about my passions in life and what drives me to constatly improve on myself. 
                </Typography>
                <Typography variant="h6" align={matchesSM ? "center" : "left"} style={{textAlign: "center",fontWeight: "lighter", margin: "40px",position: "relative", top: "12rem"}}>
                <Typography variant="h6" align={matchesSM ? "center" : "left"} style={{textAlign: "center",fontWeight: "lighter", margin: "40px",position: "relative", top: "12rem"}}>
                </Typography>
                ..
                </Typography>
                

           
		</React.Fragment>
	);
}