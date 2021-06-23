import React from "react";
import "../scss/home.scss";
import { Link } from "react-scroll";



function HeroSection() {
	
	// const [button, setButton] = useState(true);

	return (
		<section className="home">
			<div className="home_text">
			
				<h2>Hi! My name is</h2>
				<h1 className="home__name">
					Banu
				<span className="home__name--last">Tryon</span></h1>
				<div className="home__line"></div>
				<h2>Web Developer, Designer & Programmer</h2>
				
				
				<div className="home__link">
					<Link to="projects" smooth={true} duration={100}>
						Check Out My Work
					</Link>
				</div>
				</div>
			
		</section>
	);
}

export default HeroSection;
