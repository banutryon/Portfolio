import React from "react";
import emailjs from "emailjs-com";
import "./contact.css";

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
			<form className="form" onSubmit={sendEmail}>
				<h1>Contact Me</h1>
				<input type="hidden" name="contact_number" />
				<label>Enter Name</label>
				<input type="text" name="user_name" />
				<label>Your Contact Email</label>
				<input type="email" name="user_email" />
				<label>Message</label>
				<textarea className="message" name="message" />
				<input className="button" type="submit" value="Send" />
			</form>
		</section>
	);
}
