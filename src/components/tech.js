import React, { useState } from "react";
import "../scss/tech.scss";
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

    const [tech, setTech] = useState(false);
	const [tech1, setTech1] = useState(false);
    
	const changeTech = () => {
		if (window.scrollY > 1100) {
			setTech(true);
		} else {
			setTech(false);
		}
	};

	const changeTech1 = () => {
		if (window.scrollY > 1150) {
			setTech1(true);
		} else {
			setTech1(false);
		}
	};

    window.addEventListener("scroll", changeTech);
    window.addEventListener("scroll", changeTech1);


	return (
		<div className="tech">
			<h1 className="tech__h1">Technologies</h1>
			<ul className="tech__container">
				<li className={ tech ? "list__icon scroll__1" : "list__icon"}>
					<img className="icon_v1" src="/Icons/css.png" alt="technologies" />
				</li>
				<li className={ tech ? "list__icon scroll__2" : "list__icon"}>
					<img className="icon_v1" src="/Icons/html-5.png" alt="technologies" />
				</li>
				<li className={ tech ? "list__icon scroll__3" : "list__icon"}>
					<img
						className="icon_v1"
						src="/Icons/javascript.png"
						alt="technologies"
					/>
				</li>
				<li className={ tech ? "list__icon scroll__4" : "list__icon"}>
					<img className="icon_v1" src="/Icons/ruby.png" alt="technologies" />
				</li>
				<li className={ tech ? "list__icon scroll__5" : "list__icon"}>
					<img className="icon_v1" src="/Icons/react.png" alt="technologies" />
				</li>
				<li className={ tech ? "list__icon scroll__6" : "list__icon"}>
					<img className="icon_v1" src="/Icons/github.png" alt="technologies" />
				</li>
				<li className={ tech ? "list__icon scroll__7" : "list__icon"}>
					<img className="icon" src="/Icons/rails.png" alt="technologies" />
				</li>
				<li className={ tech ? "list__icon scroll__8" : "list__icon"}>
					<img className="icon" src="/Icons/mongodb.png" alt="technologies" />
				</li>

				<li className={ tech ? "list__icon scroll__9" : "list__icon"}>
					<img className="icon" src="/Icons/redux.png" alt="technologies" />
				</li>

				<li className={ tech ? "list__icon scroll__10" : "list__icon"}>
					<img
						className="icon"
						src="/Icons/postgresql.png"
						alt="technologies"
					/>
				</li>
				<li className={ tech ? "list__icon scroll__11" : "list__icon"}>
					<img className="icon" src="/Icons/slack.png" alt="technologies" />
				</li>
				<li className={ tech ? "list__icon scroll__12" : "list__icon"}>
					<img className="icon" src="/Icons/figma.png" alt="technologies" />
				</li>
			</ul>
			<div className={ tech1 ? "float scroll__float" : "float"}>
				<img
					className="pdf"
					onClick={openModal}
					src="/Icons/pdf.png"
					alt="cert"
				/>

				<Modal
					id="modal_tech"
					className="modal"
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					contentLabel="Example Modal"
				>
					<form>
						<img className="cert" src="/cert1.png" alt="cert" />
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
				<p className="p__tag">					
					My drive and passion for continuous learning progressively shape and refine my skills as a software engineer. I have completed 420 hours of instructional learning at General Assembly in an immersive full-stack software engineering program. In this course, I learned the fundamentals of all the technologies listed above.
					<p className="p__tag">
					</p>
					I am eager to adapt my skills and collaborate with different teams to provide solutions that make an impact. My strengths lean towards the front-end and focus my expertise in Javascript, React, HTML and CSS/SASS.
					</p>
					<p className="p__tag">
					My lifelong career path in the consumer electronics industry has provided me with a solid understanding of the user experience. In addition I have over a decade experience in the mobile phone industry and have a high level understanding of both IOS and Android. 

				</p>
			</div>
		</div>
	);
}

export default Tech;
