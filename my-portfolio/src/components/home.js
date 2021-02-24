import "../../App.css";
import HeroSection from "../heroSection";
import React from "react";
import Cards from "../cards";
import About from "./aboutMe";

function Home() {
	return (
		<>
			<HeroSection />
			<About />
			<Cards />
		</>
	);
}

export default Home;
