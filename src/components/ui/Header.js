import React from "react";
import Logo from "./../../assets/Logo.png";
import { HashLink as Link } from "react-router-hash-link";

// MUI-CORE
// ==========
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
const styles = makeStyles((theme) => ({
    toolBarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "-1em",
    },
    logo: {
        marginLeft: "2rem",
        width: "6rem",
    },
    tabContainer: {
        marginRight: "auto",
        [theme.breakpoints.up("xs")]: {
            marginRight: "2rem",
        }
    }
}))
export default function Header() {
    const classes = styles()
    const theme = useTheme()
    //media query
	const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

const routes = [
    { id: "0", name: "Home", link: "/" },
    { id: "1", name: "Techonoligies", link: "#tech", },
    { id: "2", name: "About", link: "#about" },
    { id: "3", name: "Projects", link: "#projects" },
    { id: "4", name: "Passions", link: "#passions" },
    { id: "5", name: "Resume", link: "#resume", a: "https://docs.google.com/document/d/1qlqkdNzLdQAdUsgCOVMLiXE1Dx4JsFdsAffA7Ugj3gQ/edit"},
];

const tabs = (
    <React.Fragment>
        <div className={classes.tabContainer}>
            {routes.map((route, id) => {
                return (
                    <Link to={route.link}
                    style={{textDecoration: "none", color: "#fff"}}>
                <Tab
                    value={route.id}
                    label={route.name}
                    component={Link}
                    key={`${route}.${id}`}
                >{route.name}</Tab></Link>
                );
            })}
        </div>  
    </React.Fragment>
);

const icons = (
    <React.Fragment>
        <div className={classes.tabContainer}>
        <Link to="#about">
            <FontAwesomeIcon
                icon={faQuestionCircle}
                title="About Me"
                className={classes.navIcons}
                alt={"About Me"}
            />
		</Link>
      
        </div>  
    </React.Fragment>
);

return (
    <React.Fragment>
        <AppBar position="fixed" color="secondary">
            <Toolbar disableGutters>
                <Button
                style={{width: "14rem"}} 
                disableRipple 
                component={Link} to={"#"}>
                    <img src={Logo} style={{ width: "40%", }} alt={"Logo"} />
                </Button>
                
                {matchesXS ? icons : tabs}
            </Toolbar>
        </AppBar>
        <div className={classes.toolBarMargin}></div>
    </React.Fragment>
);
}