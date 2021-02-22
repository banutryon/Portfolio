import React from "react";
// MUI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import  Typography  from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import P1 from "./../assets/Marvel.mov"
import P3 from "./../assets/8.mov"
import P5 from "./../assets/tesla.mov"
// 


const styles = makeStyles ((theme) => ({
    media1: {
        width: "30rem",
        // float: 'right',
        margin: "1rem",
        position: "relative",
        top: "5rem",

        
    }, 
    media2: {
        width: "30rem",
        position: "relative",
        top: "5rem",
        margin: "1rem",

    }, 
    media3: {
        width: "40rem",
        margin: "2rem",
        position: "relative",
        // margin: "0 auto",
        top: "5rem",
    }


}));

export default function Projects() {
	const classes = styles();
	const theme = useTheme();
    // media queries
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

	return (
		<React.Fragment>
			<Typography variant="h2" align="left" style={{textAlign: "center", margin: "5rem"}}>
                    Projects
                </Typography>
                <Typography variant="h6" align={matchesSM ? "center" : "left"} style={{fontWeight: "lighter", margin: "40px"}}>
                In my Marvel Card deck, I used Javascript, Html, and CSS as well as Axios to pull an online API. 
                The magic 8 Ball App is a play on the traditional magic 8 Ball. Simply ask the 8 Ball a question and click the ask button. You will get a random gif as an answer.
                It is a full crud app built with React with a Mongodb backend app. If you click on the 8 Ball  logo you will get a drop-down that will provide some basic information about how to play the game and the option to create a new gif to add to the API.
                The Last example is a Tesla Battery calculator for the Tesla Model S. I used React Native with Redux on the front end and used Mongodb for the backend. I also custom-built the api to support the new Tesla Model S that will come out this year.  

                </Typography>
        <Grid
        id="about"
        className={classes.techContainer}
        container
        justify="space-between"
        alignItems="center"
        direction="row"
        
      >      
        <CardMedia
        
            component='video'
            className={classes.media1}
            src={P1}
            autoPlay
        />
        
        <CardMedia
            component='video'
            className={classes.media2}
            src={P3}
            autoPlay
        />
        
        <CardMedia
            component='video'
            className={classes.media3}
            src={P5}
            autoPlay
        />
        </Grid>  
		</React.Fragment>
	);
}