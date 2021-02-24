import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/aboutMe";
import Tech from "./components/pages/tech";
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/Tech" exact component={Tech} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
