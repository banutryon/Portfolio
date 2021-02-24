import React from "react";
// MUI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ReactImg from "./../assets/Icons/react.png"
import Css from "./../assets/Icons/css.png"
import Js from "./../assets/Icons/javascript.png"
import Ruby from "./../assets/Icons/ruby.png"
import Rails from "./../assets/Icons/rails.png"
import Redux from "./../assets/Icons/redux.png"
import Mongodb from "./../assets/Icons/mongodb.png"
import Html from "./../assets/Icons/html.png"
import Postgres from "./../assets/Icons/postgresql.png"
import Github from "./../assets/Icons/github.png"
import Slack from "./../assets/Icons/slack.png"
import Figma from "./../assets/Icons/figma.png"



const styles = makeStyles ((theme) => ({
   
    techContainer: {
       height: "300px;", 
       margin: "2rem",
       padding: "1rem",
    }
    


}));

export default function Tech() {
	const classes = styles();
	const theme = useTheme();
    // media queries
    // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    // const matchesXS = useMediaQuery(theme.breakpoints.down("xs")) 

	return (
		<React.Fragment>
			<Grid
            id="about"
            className={classes.techContainer}
            container
            justify="space-around"
            alignItems="center"
            direction="column"
          
            >
                
                
                <Grid item>
                    <img src={ReactImg} alt="ReactImg" className={classes.react} />
                </Grid>
                <Grid item>
                    <img src={Js} alt="Js" className={classes.Js} />
                </Grid>
                <Grid item>
                    <img src={Html} alt="Html" className={classes.Html} />
                </Grid>
                <Grid item>
                    <img src={Css} alt="Css" className={classes.Css} />
                </Grid>
                
                <Grid item>
                    <img src={Redux} alt="Redux" className={classes.Redux} />
                </Grid>
                <Grid item>
                    <img src={Ruby} alt="Ruby" className={classes.Ruby} />
                </Grid>
                <Grid item>
                    <img src={Rails} alt="Rails" className={classes.Rails} />
                </Grid>
                <Grid item>
                    <img src={Postgres} alt="Postgres" className={classes.Postgres} />
                </Grid>
                <Grid item>
                    <img src={Mongodb} alt="Mongodb" className={classes.Mongodb} />
                </Grid>
                <Grid item>
                    <img src={Figma} alt="Figma" className={classes.Figma} />
                </Grid>
                <Grid item>
                    <img src={Github} alt="Github" className={classes.Github} />
                </Grid>
                <Grid item>
                    <img src={Slack} alt="Slack" className={classes.Slack} />
                </Grid>
            </Grid>
		</React.Fragment>
	);
}