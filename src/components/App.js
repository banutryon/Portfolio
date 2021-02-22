import React from "react"
import { BrowserRouter } from "react-router-dom";
import Header from './ui/Header';
import theme from './ui/Theme'
import { ThemeProvider } from "@material-ui/styles";
import HeroBanner from "./HeroBanner"
import About from "./About"
import Tech from "./Techonoligies"
import Projects from './Projects'
import Passions from './passions'
import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles ((theme) => ({
  container: {
      width: "100%",
      margin: "100%",
  }
}));





export default function App() {
  const classes = styles();

  return (
    <ThemeProvider style={classes.container} theme={theme}>
    <BrowserRouter>
    		<Header />
        <HeroBanner />
        <About />
        <Tech />
        <Projects />
        <Passions />
    	</BrowserRouter>
      </ThemeProvider>
    
  );
}

;