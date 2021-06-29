import React from "react";
import "../scss/home.scss";
import { Link } from "react-scroll";



function HeroSection() {
	
	// const [button, setButton] = useState(true);

	return (
		<section className="home">
			<div className="home__text">
			
				<h2>Hi! My name is</h2>
				<h1 className="home__name">
					Banu
				<span className="home__name--last">Tryon</span></h1>
				<div className="home__line"></div>
				<h3>Web Developer, Designer & Programmer</h3>
				
				
				<div className="home__link">
					<Link to="projects" smooth={true} duration={2000}>
						Check Out My Work
					</Link>
				</div>
				</div>
			
		</section>
	);
}

export default HeroSection;
