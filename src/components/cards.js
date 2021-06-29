import React from "react";
import "../scss/cards.scss";
// import CardItem from "./cardItem";
import { ExternalLink } from "react-external-link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Cards() {
	return (
		<section className="cards" id="projects">
			
			<h1 className="h_1">Check out my projects!</h1>
			<div className="cardsContainer">
				{/* <div className="cardsrapper"> */}
				<ul className="cardItems">
					
					<Carousel className="card">
						<li className="card__Item">
							<div className="card__ItemLink">
								<ExternalLink href="https://tryon-experiences.herokuapp.com/tryon-experiences">
									<img className="mac" src="/images-videos/macbook.png" alt="mac"></img>
									<video
										className="card__ItemVid"
										alt="Project vids"
										src="/images-videos/PNW.mov"
										autoPlay
										loop
										muted
									/>
								</ExternalLink>
								<div className="card__ItemInfo">
									<h4 className="card__h4">Full CRUD</h4>
									<h5 className="card__h5">
										Built using Node.js, Mongoose, Express and EJS
									</h5>
								</div>
								<div className="link_div">
									<div className="git_link">
										
										<ExternalLink
											className="apps_link"
											href="https://github.com/banutryon/Project-2"
										>
											<img className="app" src="/Icons/git.png" alt="Github" />
										</ExternalLink>
									</div>
									<div className="app_link">
										<ExternalLink
											className="apps_link"
											href="https://tryon-experiences.herokuapp.com/tryon-experiences"
										>
											<img
												className="app"
												src="/Icons/app.png"
												alt="app link"
											/>
										</ExternalLink>
									</div>
								</div>
							</div>
						</li>
						{/* ============================================================== */}

						{/* ============================================================== */}

						<li className="card__Item">
							<div className="card__ItemLink">
								<ExternalLink href="https://memeball.herokuapp.com/">
									<img className="mac" src="/images-videos/macbook.png" alt="mac"></img>
									<video
										className="card__ItemVid"
										alt="Project vids"
										src="/images-videos/8.mov"
										autoPlay
										loop
										muted
									/>
								</ExternalLink>
								<div className="card__ItemInfo">
									<h4 className="cards_h4">MERN stack</h4>
									<h5 className="cards_h5">
										Built using Node.js, Mongoose, Express and React
									</h5>
								</div>
								<div className="link_div">
									<div className="git_link">
										<ExternalLink
											className="apps_link"
											href="https://github.com/banutryon/8Ball"
										>
											<img className="app" src="/Icons/git.png" alt="Github" />
										</ExternalLink>
									</div>
									<div className="app_link">
										<ExternalLink
											className="apps_link"
											href="https://memeball.herokuapp.com/"
										>
											<img
												className="app"
												src="/Icons/app.png"
												alt="app link"
											/>
										</ExternalLink>
									</div>
								</div>
							</div>
						</li>
						{/* ============================================================== */}

						<li className="card__Item">
							<div className="card__ItemLink">
								<ExternalLink href="https://banutryon.github.io/SuperHero-Project-1/">
									<img className="mac" src="/images-videos/macbook.png" alt="mac"></img>
									<video
										className="card__ItemVid"
										alt="Project vids"
										src="/images-videos/Marvel.mov"
										autoPlay
										loop
										muted
									/>
								</ExternalLink>
								<div className="card__ItemInfo">
									<h4 className="cards_h4">Restful API</h4>
									<h5 className="cards_h5">
										Built with HTML, CSS, JavaScript and jQuery
									</h5>
								</div>
								<div className="link_div">
									<div className="git_link">
										<ExternalLink
											className="apps_link"
											href="https://github.com/banutryon/SuperHero-Project-1"
										>
											<img className="app" src="/Icons/git.png" alt="Github" />
										</ExternalLink>
									</div>
									<div className="app_link">
										<ExternalLink
											className="apps_link"
											href="https://banutryon.github.io/SuperHero-Project-1/"
										>
											<img
												className="app"
												src="/Icons/app.png"
												alt="app link"
											/>
										</ExternalLink>
									</div>
								</div>
							</div>
						</li>
						{/* ============================================================== */}
						<li className="card__Item ">
							<div className="card__ItemLink tesla_project">
								<ExternalLink href="https://tesla-app-front.herokuapp.com/">
									<img className="mac" src="/images-videos/macbook.png" alt="mac"></img>
									<video
										className="card__ItemVid tesla_vid"
										alt="Project vids"
										src="/images-videos/tesla.mov"
										autoPlay
										loop
										muted
									/>
								</ExternalLink>
								<div className="card__ItemInfo">
									<h4 className="cards_h4">MERRN stack</h4>
									<h5 className="cards_h5">
										Built using Node.js, Mongoose, React and Redux
									</h5>
								</div>
								<div className="link_div">
									<div className="git_link">
										<ExternalLink
											className="apps_link"
											href="https://github.com/banutryon/Tesla-App"
										>
											<img className="app" src="/Icons/git.png" alt="Github" />
										</ExternalLink>
									</div>
									<div className="app_link">
										<ExternalLink
											className="apps_link"
											href="https://tesla-app-front.herokuapp.com/"
										>
											<img
												className="app"
												src="/Icons/app.png"
												alt="app link"
											/>
										</ExternalLink>
									</div>
								</div>
							</div>
						</li>
					</Carousel>
					
					{/* <CardItem
							src="/images-videos/PNW.mov"
							text="Built using Node.js, Mongoose, Express and EJS"
							label="Full CRUD"
							path="/about"
							href="https://tryon-experiences.herokuapp.com/tryon-experiences"
						/> */}

					{/* <CardItem
							className="tesla"
							src="/images-videos/tesla.mov"
							text="Built using Node.js, Mongoose, React and Redux"
							label="MERRN stack"
							path="/services"
							href="https://tesla-app-front.herokuapp.com/"
						/> */}

					{/* <CardItem
							src="/images-videos/8.mov"
							text="Built using Node.js, Mongoose, Express and React"
							label="MERN stack"
							path="/products"
							href="https://memeball.herokuapp.com/"
						/> */}
					{/* <CardItem
							src="/images-videos/Marvel.mov"
							text="Built with HTML, CSS, JavaScript and jQuery"
							label="Restful API"
							path="/sign-up"
							href="https://banutryon.github.io/SuperHero-Project-1/"
						/> */}
				</ul>
				{/* </div> */}
			</div>
		</section>
	);
}

export default Cards;
