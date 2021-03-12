import React from "react";
import "./about.css";
import Me from "./myPic";
function About() {
	return (
		<section className="container" id="about">
			<h1 className="about">About</h1>
			<div className="aboutContainer">
				<div className="aboutIconMe">
					<img src="/Icons/me.png" alt="aboutIcon" />

					<div className="line1"></div>
				</div>

				<p className="popup1 popup speech-bubble speech-bubble-left">
					I am willing to put in the work!!
				</p>
				<div className="aboutIcon1">
					<img src="/Icons/diving.png" alt="aboutIcon" />
					<div className="line2"></div>
				</div>
				<p className="popup2 popup speech-bubble speech-bubble-left">
					Dive deep - consider all angles of a problem or need
				</p>
				<div className="aboutIcon2">
					<img src="/Icons/scale.png" alt="aboutIcon" />
					<div className="line3"></div>
				</div>
				<p className="popup3 popup speech-bubble speech-bubble-left">
					Assessing a problem before deciding on a solution. Select methods that
					are the most efficient while maintaining the highest quality. [Pareto
					Principle]
				</p>
				<div className="aboutIcon3">
					<img src="/Icons/laptop.png" alt="aboutIcon" />
					<div className="line4"></div>
				</div>
				<p className="popup4 popup speech-bubble speech-bubble-right">
					My layouts will work on any device, big or small.
				</p>
				<div className="aboutIcon4">
					<img src="/Icons/speed.png" alt="aboutIcon" />
				</div>
				<p className="popup5 popup speech-bubble speech-bubble-right">
					Fast load times to keep the customer engaged is my highest priority.
				</p>
			</div>
			<div className="text">
				<Me />
				<p className="p">
					As a software engineer, I will take my previous experiences and apply
					them to the projects at hand and provide a solution to your users that
					will make your company proud. My passion to improve people’s lives
					through technology will allow me to put in the work to make sure we
					understand the customer at a high level and create world-class
					products.
				</p>

				<br />
				<p className="p">
					Having over 15 years of experience in consumer electronics has
					provided me with a solid understanding of how users interact with
					different technologies. I feel like this gives me an upper hand as a
					software engineer as I can look at the problem/project from many
					different angles before even beginning to write any code.
				</p>
			</div>
		</section>
	);
}

export default About;
