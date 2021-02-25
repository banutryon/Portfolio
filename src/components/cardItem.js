import React from "react";
import { Link } from "react-scroll";

function CardItem(props) {
	return (
		<>
			<li className="cardsItem">
				<Link className="cardsItemLink" to={props.path}>
					<figure className="cardsItemPic-wrap" data-category={props.label}>
						<video
							className="cardsItemVid"
							alt="Project vids"
							src={props.src}
							autoPlay
							loop
							muted
						/>
					</figure>
					<div className="cardsItemInfo">
						<h5 className="cardsItemText">{props.text}</h5>
					</div>
				</Link>
			</li>
		</>
	);
}

export default CardItem;
