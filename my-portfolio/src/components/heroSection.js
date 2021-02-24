import React, { useState } from "react";
import { Button } from "./button";
import "./heroSection.css";

function HeroSection() {
	// const [button, setButton] = useState(true);

	return (
		<div className="heroContainer">
			<video src="/images-videos/hV.mp4" autoPlay loop muted />
			<div className="intro">
				<h1>Hello, I'm Banu Tryon.</h1>
				<h1>I'm a full-stack web developer</h1>
			</div>
			<div className="heroBtns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					Learn about me
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
