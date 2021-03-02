import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import HeroSection from "./components/heroSection";
import Cards from "./components/cards";
import Tech from "./components/tech";
import Footer from "./components/footer";
import ContactMe from "./components/contactMe";
function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<About />
			<Tech />
			<Cards />
			<ContactMe />
			<Footer />
		</>
	);
}

export default App;
