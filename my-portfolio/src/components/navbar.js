import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images-videos/Logo.png";
import { Button } from "./button";
import "./navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};
	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);
	return (
		<>
			<nav className="navbar">
				<div className="navContainer">
					<Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
						<img className="navbarImg" src={Logo} alt={"Logo"} />
					</Link>
					<div className="menuIcon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "navMenu active" : "navMenu"}>
						<li className="navItem">
							<Link to="/" className="navLinks" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="navItem">
							<Link to="/" className="navLinks" onClick={closeMobileMenu}>
								Projects
							</Link>
						</li>
						<li className="navItem">
							<Link to="/About" className="navLinks" onClick={closeMobileMenu}>
								About Me
							</Link>
						</li>

						<li>
							<Link to="/Tech" className="navLinks" onClick={closeMobileMenu}>
								Technologies
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle="btn--outline">Contact Me</Button>}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
