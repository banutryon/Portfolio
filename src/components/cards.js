import React, { useState } from "react";
import "../scss/cards.scss";
// import CardItem from "./cardItem";
import { ExternalLink } from "react-external-link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Cards() {
	// const [vid, setVid] = useState(false);
	const [img, setImg] = useState(false);
	const [icon, setIcon] = useState(false);
	const changeImg = () => {
		if (window.scrollY >= 1800) {
			setImg(true);
		} else {
			setImg(false);
		}
	};
	// const changeVid = () => {
	// 	if (window.scrollY >= 1800) {
	// 		setVid(true);
	// 	} else {
	// 		setVid(false);
	// 	}
	// };
	const changeIcon = () => {
		if (window.scrollY >= 1800) {
			setIcon(true);
		} else {
			setIcon(false);
		}
	};
	window.addEventListener("scroll", changeImg);
	// window.addEventListener("scroll", changeVid);
	window.addEventListener("scroll", changeIcon);

	return (
		<section className="cards" id="projects">
			<h1 className="h_1">Check out my projects!</h1>
			<div className="cardsContainer">
				{/* <div className="cardsrapper"> */}
				<ul className="cardItems">
					<Carousel className="card">
						<li className="card__Item">
							<ExternalLink
								className="card__ItemLink"
								href="https://the-store-ecommerce.herokuapp.com/"
							>
								<img
									className="card__mac"
									src="/images-videos/macbook.png"
									alt="mac"
								></img>
								<img
									className={img ? "card__Img card__scroll" : "card__Img"}
									src="/images-videos/store.png"
									alt="img"
								/>
								{/* <video
									className={
										vid
											? "card__ItemVid card__vid2 card__scroll"
											: "card__ItemVid card__vid2"
									}
									alt="Project vids"
									src="/images-videos/store.mov"
									autoPlay
									loop
									muted
								/> */}
							</ExternalLink>
							<div className="card__ItemInfo">
								<h4 className="card__h4">Ecommerce app</h4>
								<p className="card__p">
									Built using React, Redux, JavaScript, and SASS styling. This
									app has full CRUD and authentication with admin, seller and
									buyer login access. Google map API integration for address
									input at checkout and Implemented Order Payment with Paypal.
								</p>
							</div>
							<div className={icon ? "link_div icon__scroll" : "link_div"}>
								<div className="git_link">
									<ExternalLink
										className="apps_link"
										href="https://dashboard.heroku.com/apps/the-store-ecommerce"
									>
										<img className="app" src="/Icons/git.png" alt="Github" />
									</ExternalLink>
								</div>
								<div className="app_link">
									<ExternalLink
										className="apps_link"
										href="https://the-store-ecommerce.herokuapp.com/"
									>
										<img className="app" src="/Icons/app.png" alt="app link" />
									</ExternalLink>
								</div>
							</div>
						</li>
						{/* ============================================================== */}

						<li className="card__Item">
							<ExternalLink
								className="card__ItemLink"
								href="https://tryon-experiences.herokuapp.com/tryon-experiences"
							>
								<img
									className="card__mac"
									src="/images-videos/macbook.png"
									alt="mac"
								></img>
								<img
									className={img ? "card__Img card__scroll" : "card__Img"}
									src="/images-videos/pnw.png"
									alt="img"
								></img>
								{/* <video
									className={
										vid ? "card__ItemVid card__scroll" : "card__ItemVid"
									}
									alt="Project vids"
									src="/images-videos/PNW.mov"
									autoPlay
									loop
									muted
								/> */}
							</ExternalLink>
							<div className="card__ItemInfo">
								<h4 className="card__h4">Full CRUD</h4>
								<p className="card__p">
									Built using Node.js, Mongoose, Express and EJS. This is a tour
									guide website with full CRUD and authentication. Also all
									photos of this app were taken by yours truly.
								</p>
							</div>
							<div className={icon ? "link_div icon__scroll" : "link_div"}>
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
										<img className="app" src="/Icons/app.png" alt="app link" />
									</ExternalLink>
								</div>
							</div>
						</li>
						{/* ============================================================== */}

						{/* ============================================================== */}

						<li className="card__Item">
							<ExternalLink
								className="card__ItemLink"
								href="https://memeball.herokuapp.com/"
							>
								<img
									className="card__mac"
									src="/images-videos/macbook.png"
									alt="mac"
								></img>
								<img
									className={img ? "card__Img card__scroll" : "card__Img"}
									src="/images-videos/8.png"
									alt="img"
								></img>
								{/* <video
									className={
										vid
											? "card__ItemVid card__vid2 card__scroll"
											: "card__ItemVid card__vid2"
									}
									alt="Project vids"
									src="/images-videos/8.mov"
									autoPlay
									loop
									muted
								/> */}
							</ExternalLink>
							<div className="card__ItemInfo">
								<h4 className="card__h4">MERN stack</h4>
								<p className="card__p">
									Built using Node.js, Mongoose, Express and React. With full
									CRUD and a custom built API Memeball works like a typical
									magic 8 Ball. Click the ask a question button and see your
									answer.
								</p>
							</div>
							<div className={icon ? "link_div icon__scroll" : "link_div"}>
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
										<img className="app" src="/Icons/app.png" alt="app link" />
									</ExternalLink>
								</div>
							</div>
						</li>
						{/* ============================================================== */}

						<li className="card__Item">
							<ExternalLink
								className="card__ItemLink"
								href="https://banutryon.github.io/SuperHero-Project-1/"
							>
								<img
									className="card__mac"
									src="/images-videos/macbook.png"
									alt="mac"
								></img>
								<img
									className={img ? "card__Img card__scroll" : "card__Img"}
									src="/images-videos/marvel.png"
									alt="img"
								></img>
								{/* <video
									className={
										vid ? "card__ItemVid card__scroll" : "card__ItemVid"
									}
									alt="Project vids"
									src="/images-videos/Marvel.mov"
									autoPlay
									loop
									muted
								/> */}
							</ExternalLink>
							<div className="card__ItemInfo">
								<h4 className="card__h4">Restful API</h4>
								<p className="card__p">
									Built with HTML, CSS, JavaScript and jQuery. This is my first
									website I created. It pulls data from a Marvel API to create a
									info deck of your favorite marvel characters.
								</p>
							</div>
							<div className={icon ? "link_div icon__scroll" : "link_div"}>
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
										<img className="app" src="/Icons/app.png" alt="app link" />
									</ExternalLink>
								</div>
							</div>
						</li>
						{/* ============================================================== */}
						<li className="card__Item ">
							<div className=" tesla_project">
								<ExternalLink
									className="card__ItemLink"
									href="https://tesla-app-front.herokuapp.com/"
								>
									<img
										className="card__mac"
										src="/images-videos/macbook.png"
										alt="mac"
									></img>
									<img
										className={
											img
												? "card__Img card__Img2 card__scroll"
												: "card__Img cardImg2"
										}
										src="/images-videos/tesla.png"
										alt="img"
									></img>
									{/* <video
										className={
											vid
												? "card__ItemVid card__vid3 card__scroll"
												: "card__ItemVid card__vid3"
										}
										alt="Project vids"
										src="/images-videos/tesla.mov"
										autoPlay
										loop
										muted
									/> */}
								</ExternalLink>
								<div className="card__ItemInfo">
									<h4 className="card__h4">MERRN stack</h4>
									<p className="card__p">
										Built using Node.js, Mongoose, React and Redux. I created
										this Tesla range calculator due to my passion for Tesla.
										This app has a custom build api with over 600 lines using
										mongoose and node.js for the backend.
									</p>
								</div>
								<div className={icon ? "link_div icon__scroll" : "link_div"}>
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
