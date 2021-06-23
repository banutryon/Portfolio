import React from "react";
import { Link } from "react-scroll";
import "../scss/footer.scss";
function Footer() {
	return (
		<>
			<ul className="footer">
				<li className="footerItem">
					<Link className="footerLinks">
						<img
							className="social"
							src="/Icons/git.png"
							alt="Github"
							onClick={() =>
								window.open(
									"https://github.com/banutryon?tab=repositories",
									"_blank"
								)
							}
						/>
					</Link>
				</li>

				<li className="footerItem">
					<Link className="footerLinks">
						<img
							className="social"
							src="/Icons/linkedin.png"
							alt="Linkedin"
							onClick={() =>
								window.open(
									"https://linkedin.com/in/tryon-experiences",
									"_blank"
								)
							}
						/>
					</Link>
				</li>
				{/* <li className="navItem">
							<Link className="navLinks">
								<img
									className="navbarImg"
									src="/Icons/git.png"
									alt="Github"
									onClick={() =>
										window.open(
											"https://github.com/banutryon?tab=repositories",
											"_blank"
										)
									}
								/>
							</Link>
						</li> */}
			</ul>
			<ul>
				<li>
					<div>
						CSS Icons made by{" "}
						<a href="https://www.freepik.com" title="Freepik">
							Freepik
						</a>{" "}
						from{" "}
						<a href="https://www.flaticon.com/" title="Flaticon">
							www.flaticon.com
						</a>
					</div>
				</li>
				<li>
					<div>
						HTML Icons made by{" "}
						<a href="https://www.freepik.com" title="Freepik">
							Freepik
						</a>{" "}
						from{" "}
						<a href="https://www.flaticon.com/" title="Flaticon">
							www.flaticon.com
						</a>
					</div>
				</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</>
	);
}

export default Footer;
