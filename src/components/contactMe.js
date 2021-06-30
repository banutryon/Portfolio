import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../scss/contact.scss";

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


const [form, setForm] = useState(false);

const changeForm = () => {
		if (window.scrollY >= 2200) {
			setForm(true);
		} else {
			setForm(false);
		}
	};

window.addEventListener("scroll", changeForm);


	return (
		<section className="formcontainer" id="contact">
			
			<div className="contact_box">
				<h1>Shoot Me An Email</h1>
				<form className={ form ? "form form__scroll" : "form"} onSubmit={sendEmail}>
					
					<input type="hidden" className="input" />
					<label id="label">Enter Name</label>
					<input type="text" name="user_name" />
					<label id="label">Your Email</label>
					<input type="email" name="user_email" />
					<label id="label">Message</label>
					<textarea className="message" name="message" />
					<input id="button" type="submit" value="Send" />
				</form>
				
			</div>
		</section>
	);
}
