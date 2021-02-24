import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/aboutMe";
import HeroSection from "./components/heroSection";
import Cards from "./components/cards";
import Tech from "./components/tech";
function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<About />
			<Tech />
			<Cards />
		</>
	);
}

export default App;
