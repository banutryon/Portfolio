import React from "react";
import emailjs from "emailjs-com";
import "../scss/contact.scss";
import { ExternalLink } from "react-external-link";

export default function ContactMe() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_69wnkdb",
				"BanuEmail",
				e.target,
				"user_4anrU0nrC39dkH1Q3FgWa"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("Your message has been submitted👍");
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<section className="formcontainer" id="contact">
			{/* <h1 className="h1">CONTACT ME</h1> */}
			<div className="contact_box">
				<form className="form" onSubmit={sendEmail}>
					<h1>Send Me An Email</h1>
					<input type="hidden" className="input" />
					<label id="label">Enter Name</label>
					<input type="text" name="user_name" />
					<label id="label">Your Email</label>
					<input type="email" name="user_email" />
					<label id="label">Message</label>
					<textarea className="message" name="message" />
					<input id="button" type="submit" value="Send" />
				</form>
				<div id="contact_icons">
					<ExternalLink
						className="link_contact"
						href="https://www.linkedin.com/in/tryon-experiences"
					>
						<img
							className="icon_contact"
							src="/Icons/link.png"
							alt="technologies"
						/>
					</ExternalLink>
					<ExternalLink
						className="link_contact"
						href="https://www.facebook.com/banu.tryon/"
					>
						<img
							className="icon_contact"
							src="/Icons/face.png"
							alt="technologies"
						/>
					</ExternalLink>

					<ExternalLink
						className="link_contact"
						href="https://github.com/banutryon?tab=repositories"
					>
						<img
							className="icon_contact"
							src="/Icons/repo.png"
							alt="technologies"
						/>
					</ExternalLink>
				</div>
			</div>
		</section>
	);
}
