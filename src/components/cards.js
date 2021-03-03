import React from "react";
import "./cards.css";
import CardItem from "./cardItem";

function Cards() {
	return (
		<section className="cards" id="projects">
			<h1 className="h1">Check out some of my projects!</h1>
			<div className="cardsContainer">
				<div className="cardsrapper">
					<ul className="cardsItems">
						<CardItem
							src="/images-videos/PNW.mov"
							text="Built using Node.js, Mongoose, Express and EJS"
							label="Full CRUD"
							path="/services"
						/>
						<CardItem
							className="tesla"
							src="/images-videos/tesla.mov"
							text="Built using Node.js, Mongoose, React and Redux"
							label="MERRN stack"
							path="/services"
						/>
						<CardItem
							src="/images-videos/8.mov"
							text="Built using Node.js, Mongoose, Express and React"
							label="MERN stack"
							path="/products"
						/>
						<CardItem
							src="/images-videos/Marvel.mov"
							text="Built with HTML, CSS, JavaScript and jQuery"
							label="Restful API"
							path="/sign-up"
						/>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Cards;
