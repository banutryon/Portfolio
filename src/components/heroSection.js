import React from "react";
import "./heroSection.css";
import { Link } from "react-scroll";
function HeroSection() {
	// const [button, setButton] = useState(true);

	return (
		<section className="techSection" id="hero">
			<div className="heroContainer">
				<img className="sky" src="images-videos/sky.jpg" alt="background" />

				<div className="intro">
					<h2>
						Hello I'm<h1>Banu Tryon </h1>
					</h2>
					<p>
						Full-stack web developer focused on creating world class experiences
						through clean and user-friendly design.
					</p>
				</div>
				<div className="heroLink">
					<Link to="projects" smooth={true} duration={1000}>
						Check Out My Work
					</Link>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
