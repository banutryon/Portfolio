import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import { animateScroll as scroll } from "react-scroll";
import $ from "jquery";
function Navbar() {
	const [click, setClick] = useState(false);
	const [navbar, setNavbar] = useState(false);
	const [logo, setLogo] = useState(false);

	const hambuger = () => {
		$(".navTrigger").one("click", function () {
			$(".main_list").toggleClass("show_list");
			$(this).toggleClass("active");
			$("#mainListDiv").fadeIn();
		});
	};
	const hambuger2 = () => {
		$(".li").one("click", function () {
			$(".navTrigger").toggleClass("active");
			$(".main_list").toggleClass("show_list");
			$("#mainListDiv").fadeIn();
		});
	};
	const closeMobileMenu = () => {
		setClick(!click);
		// let x = document.querySelector(".navTrigger");
		// x.toggleClass("active");
	};

	const changeBackground = () => {
		if (window.scrollY >= 50) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	const changeLogo = () => {
		if (window.scrollY >= 50) {
			setLogo(true);
		} else {
			setLogo(false);
		}
	};

	window.addEventListener("scroll", changeBackground);
	window.addEventListener("scrollLogo", changeLogo);
	window.addEventListener("close", closeMobileMenu);
	return (
		<>
			<nav className={navbar ? "nav scroll" : "nav"}>
				<div className="navContainer">
					<Link className="navLogo scrollLogo">
						<img
							className={
								logo ? "navImg logoWhite scrollLogo" : "navImg logoWhite"
							}
							src="/newLogo.png"
							alt="Logo"
							onClick={() => scroll.scrollToTop()}
						/>
						<img
							className={
								logo ? "navImg logoGreen scrollLogo" : "navImg logoGreen"
							}
							src="/logoHover.png"
							alt="Logo"
							onClick={() => scroll.scrollToTop()}
						/>
					</Link>
					<div
						id="mainListdiv"
						class={click ? "main_list " : "main_list close"}
					>
						<ul className="navlinks">
							<li className="navItem">
								<Link
									to="about"
									smooth={true}
									duration={1000}
									className="li"
									// onClick={closeMobileMenu}
									onClick={hambuger2}
								>
									ABOUT
								</Link>
							</li>

							<li className="navItem">
								<Link
									to="tech"
									smooth={true}
									duration={1000}
									className="li"
									// onClick={closeMobileMenu}
									onClick={hambuger2}
								>
									TECHNOLOGIES
								</Link>
							</li>
							<li className="navItem">
								<Link
									to="projects"
									smooth={true}
									duration={1000}
									className="li"
									// onClick={closeMobileMenu}
									onClick={hambuger2}
								>
									PROJECTS
								</Link>
							</li>
							<li className="navItem">
								<Link
									to="contact"
									smooth={true}
									duration={1000}
									className="li"
									// onClick={closeMobileMenu}
									onClick={hambuger2}
								>
									CONTACT ME
								</Link>
							</li>
						</ul>
					</div>

					<span className="navTrigger" onClick={hambuger}>
						<i></i>
						<i></i>
						<i></i>
					</span>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
