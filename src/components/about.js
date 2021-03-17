import React from "react";
import "./about.css";
import Me from "./myPic";
function About() {
	return (
		<section className="container" id="about">
			<div className="right_about">
				<img id="node" src="/Icons/Nodes_horizontal.png" alt="node" />

				<span className="rock"></span>
				<div id="popup1">
					<p className="p_about">
						Assessing a problem before deciding on a solution. Select methods
						that are the most efficient while maintaining the highest quality.
						"Pareto Principle"
					</p>
				</div>
				<span className="dive "></span>
				<div id="popup2">
					<p className="p_about">
						Dive deep - consider all angles of a problem or need
					</p>
				</div>
				<span className="rocket"></span>
				<div id="popup3">
					<p className="p_about">
						Fast load times to keep the customer engaged is my highest priority.
					</p>
				</div>
				<span className="laptop"></span>
				<div id="popup4">
					<p className="p_about">
						My layouts will work on any device, big or small.
					</p>
				</div>
				<a className="resume" href="/resume.pdf" target="_newtab" download>
					Resume
				</a>
			</div>
			<div className="text_container">
				<h1 className="about">ABOUT ME</h1>

				<span className="text">
					<Me />
					<p className="p" id="p">
						As a software engineer, I will take my previous experiences and
						apply them to the projects at hand and provide a solution to your
						users that will make your company proud. My passion to improve
						people’s lives through technology will allow me to put in the work
						to make sure we understand the customer at a high level and create
						world-class products.
					</p>

					<p className="p" id="p">
						Having over 15 years of experience in consumer electronics has
						provided me with a solid understanding of how users interact with
						different technologies. I feel like this gives me an upper hand as a
						software engineer as I can look at the problem/project from many
						different angles before even beginning to write any code.
					</p>
				</span>
			</div>
		</section>
	);
}

export default About;
