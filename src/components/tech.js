import React from "react";
import "./tech.css";

function Tech() {
	return (
		<section className="techSection" id="tech">
			<h1 className="tech_h1">Technologies</h1>

			<ul className="techContainer">
				<li>
					<img src="/Icons/css.png" alt="technologies" />
				</li>
				<li>
					<img className="html" src="/Icons/html-5.png" alt="technologies" />
				</li>
				<li>
					<img src="/Icons/javascript.png" alt="technologies" />
				</li>
				<li>
					<img src="/Icons/ruby.png" alt="technologies" />
				</li>
				<li>
					<img src="/Icons/react.png" alt="technologies" />
				</li>
				<li>
					<img src="/Icons/github.png" alt="technologies" />
				</li>
				<li>
					<img className="icon" src="/Icons/rails.png" alt="technologies" />
				</li>
				<li>
					<img className="icon" src="/Icons/mongodb.png" alt="technologies" />
				</li>

				<li>
					<img className="icon" src="/Icons/redux.png" alt="technologies" />
				</li>

				<li>
					<img
						className="icon"
						src="/Icons/postgresql.png"
						alt="technologies"
					/>
				</li>
				<li>
					<img className="icon" src="/Icons/slack.png" alt="technologies" />
				</li>
				<li>
					<img className="icon" src="/Icons/figma.png" alt="technologies" />
				</li>
			</ul>
			<input
				type="button"
				value="click here"
				onclick=".window.open('../../public/Certificate-of-Completion-banutryon@gmail.com-1614732771 (1).pdf');"
			/>

			<p>
				Completion of a 420 hours instructional Software Engineering Immersive
				Full Stack course at General Assembly. Click here to see Certificate of
				Completion.
			</p>
		</section>
	);
}

export default Tech;
