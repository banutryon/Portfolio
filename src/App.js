import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import HeroSection from "./components/heroSection";
import Cards from "./components/cards";
import Tech from "./components/tech";
import Footer from "./components/footer";
import ContactMe from "./components/contactMe";
import ProjectTesla from "./components/project-tesla";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<>
			{/* <Router>
				<Switch>
					<Route exact path="/"> */}
			<Navbar />
			<HeroSection />
			<About />
			<Tech />
			<Cards />
			<ContactMe />
			<Footer />
			{/* </Route>
					<Route exact path="/tesla">
						<ProjectTesla />
					</Route>
				</Switch>
			</Router> */}
		</>
	);
}

export default App;
