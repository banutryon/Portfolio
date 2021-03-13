import React from "react";
import "./tech.css";
import Modal from "react-modal";
import { Link } from "react-scroll";

function Tech() {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div className="tech_section" id="tech">
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
			<div className="float">
				<img
					className="pdf"
					onClick={openModal}
					src="/Icons/pdf.png"
					alt="cert"
				/>

				<Modal
					className="modal"
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					contentLabel="Example Modal"
				>
					<form>
						<img className="cert" src="/cert.jpg" alt="cert" />
						<Link
							to="technologies"
							smooth={true}
							duration={1000}
							className="modal_btn"
							onClick={closeModal}
						>
							Close
						</Link>
						{/* <button className="modal_btn">close</button> */}
					</form>
				</Modal>
				<p className="p_tag">
					My drive and passion for continuous learning progressively shape and
					refine my skills as a software engineer. I have completed 420 hours of
					instructional learning at General Assembly in an immersive full-stack
					software engineering program. In this course, I have learned the
					fundamentals of all the technologies listed above. I am eager to adapt
					my skillset and collaborate with different teams to provide solutions
					that make an impact. My strengths lean towards the front-end and I
					have focused my expertise in Javascript, React, HTML, and CSS/SASS. My
					lifelong career path has surrounded me in consumer electronics with a
					solid understanding of customer’s needs. I feel like this provides me
					the upper hand when understanding “the why” something needs to be
					implemented and allows me to retain newly learned information in
					regards to these technologies.
				</p>
			</div>
		</div>
	);
}

export default Tech;
