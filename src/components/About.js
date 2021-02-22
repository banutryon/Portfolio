import React from "react";
// MUI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "./../assets/images/me.jpg"
import  Typography  from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";



const styles = makeStyles ((theme) => ({
    aboutMeBody: {
        ...theme.typography.body1,
        [theme.breakpoints.up("md")]: {
            maxWidth: "70ch",
        }
    },
    aboutMeContainer: {
        padding: "6rem 6rem",
    },
    avatar: {
        height: "300px",
        borderRadius: "50%",
        [theme.breakpoints.up("lg")]: {
            marginRight: "10rem",
        }
        
    }


}));

export default function About() {
	const classes = styles();
	const theme = useTheme();
    // media queries
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs")) 

	return (
		<React.Fragment>
			<Grid
            id="about"
            className={classes.aboutMeContainer}
            container
            justify="space-around"
            alignItems="center"
            direction="row"
            >
                <Grid item>
                    <Typography variant="h2" align={matchesSM ? "center" : "left"}>About Me</Typography>
                    <Typography variant="body1" align={matchesSM ? "center" : "left"} className={classes.aboutMeBody}>As a software engineer, I will take my previous experiences and apply them to the projects at hand and provide a solution to your users that will make your company proud. My passion to improve people’s lives through technology will allow me to put in the work to make sure we understand the customer at a high level and create world-class products.

Having over 15 years of experience in consumer electronics has provided me with a solid understanding of how users interact with different technologies. I feel like this gives me an upper hand as a software engineer as I can look at the problem/project from many different angles before even beginning to write any code.  
</Typography>
                </Grid>
                <Grid item>
                    <img src={Avatar} alt="avatar" className={classes.avatar} />
                </Grid>
            </Grid>
		</React.Fragment>
	);
}