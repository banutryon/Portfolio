import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// ==========
// MUI-CORE
// ==========
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

export default function Header(props) {
    // const classes = styles()
    // const theme = useTheme()

const routes = [
    { id: "0", name: "Home", link: "/" },
    { id: "1", name: "About", link: "/about" },
    { id: "2", name: "Contact", link: "/contact" },
    { id: "3", name: "GitHub", link: "/github" },
    { id: "4", name: "Resume", link: "/resume" },
];

const tabs = (
    <React.Fragment>
        <Tabs>
            {routes.map((route, id) => (
                <Tab
                    component={Link}
                    to={"#"}
                    label={route.name}
                    key={`${route}.${id}`}
                ></Tab>
            ))}
        </Tabs>
        
      
        
    </React.Fragment>
);


return (
    <React.Fragment>
        <AppBar>
            <Toolbar disableGutters>
                <Button disableRipple component={Link} to={"#"}>
                    <img src={Logo} style={{ width: "10%" }} alt={"Logo"} />
                </Button>
                <h3>Banu Tryon</h3>
                {tabs}
            </Toolbar>
        </AppBar>
    </React.Fragment>
);
}