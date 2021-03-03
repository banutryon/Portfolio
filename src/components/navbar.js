import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import { animateScroll as scroll } from "react-scroll";
function Navbar() {
	const [click, setClick] = useState(false);
	// const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);

	const closeMobileMenu = () => setClick(false);

	// const showButton = () => {
	// 	if (window.innerWidth <= 960) {
	// 		setButton(false);
	// 	} else {
	// 		setButton(true);
	// 	}
	// };
	// useEffect(() => {
	// 	showButton();
	// }, []);

	// window.addEventListener("resize", showButton);
	return (
		<>
			<nav className="nav">
				<div className="navContainer">
					<Link className="navbarLogo">
						<img
							className="navbarImg"
							src="/newLogo.png"
							alt="Logo"
							onClick={() => scroll.scrollToTop()}
						/>
					</Link>
					<div className="menuIcon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul id="mainListDiv" className={click ? "navMenu active" : "navMenu"}>
						<li className="navItem">
							<Link
								to="about"
								smooth={true}
								duration={1000}
								className="navLinks"
								onClick={closeMobileMenu}
							>
								ABOUT
							</Link>
						</li>

						<li>
							<Link
								to="tech"
								smooth={true}
								duration={1000}
								className="navLinks"
								onClick={closeMobileMenu}
							>
								TECHNOLOGIES
							</Link>
						</li>
						<li className="navItem">
							<Link
								to="projects"
								smooth={true}
								duration={1000}
								className="navLinks"
								onClick={closeMobileMenu}
							>
								PROJECTS
							</Link>
						</li>
						<li>
							<Link
								to="contact"
								smooth={true}
								duration={1000}
								className="navLinks"
								onClick={closeMobileMenu}
							>
								CONTACT ME
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
