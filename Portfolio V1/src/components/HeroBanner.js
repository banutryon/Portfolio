import { MuiThemeProvider } from "@material-ui/core"
import React from "react"
// MUI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
// Assets
import BannerImg from "../assets/images/bannerImg.jpg"
import Button from '@material-ui/core/Button'
import theme from './ui/Theme'

const styles = makeStyles((theme) => ({
    mainContainer: {
        height: "50vh",
        padding: "0", 
        margin: 0,
    },
    heroBackground: {
        backgroundImage: `url(${BannerImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        height: "80%",
        width: "100%"
    },
    contactButton: {
        ...theme.button, 
        margin: "1rem",
    } 
}));


export default function HeroBanner() {
    const classes = styles();
    const heroBanner = (
        <React.Fragment>
            <Grid
            className={classes.mainContainer} 
            container 
            alignItems="center" 
            direction="row">
                <Grid item className={classes.heroBackground}>
                <Typography variant="h4" align="left" style={{marginTop: "6rem",marginLeft: "2rem", color: "white"}}>
                    Hello I'm
                </Typography> 
                <Typography variant="h2" align="left" style={{color:"white",margin: "1.5rem"}}>
                    Banu Tryon
                </Typography>
                <Button className={classes.contactButton} href="mailto: banu.tryon@gmail.com">Connect With Me</Button>
                </Grid>
            </Grid>
        </React.Fragment>
);

	return <React.Fragment>{heroBanner}</React.Fragment>;
}