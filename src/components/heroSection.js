import React from "react";
import { Button } from "./button";
import "./heroSection.css";
import { Link } from "react-scroll";
function HeroSection() {
	// const [button, setButton] = useState(true);

	return (
		<section className="techSection" id="hero">
			<div className="heroContainer">
				<video src="/images-videos/hV.mp4" autoPlay loop muted />
				<div className="intro">
					<h1>Hello, I'm Banu Tryon.</h1>
					<h1>I'm a full-stack web developer</h1>
				</div>
				<div className="heroLink">
					<Link to="about" smooth={true} duration={1000}>
						Learn about me
					</Link>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
