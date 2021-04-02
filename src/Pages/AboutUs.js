import React, { useState } from "react";

export default function AboutUs() {
	const [firstName, setFirstName] = useState();
	const [surName, setSurName] = useState();
	const [email, setEmail] = useState();
	const [selectOption, setSelectOption] = useState();
	const [userMessage, setMessage] = useState();

	const contactUs = (e) => {
		e.preventDefault();
		let formattedString = `
		First Name: ${firstName} \n
		Surname: ${surName} \n
		Email: ${email} \n
		Heard From: ${selectOption} \n
		Message: ${userMessage}`;
		alert(formattedString);
	};

	return (
		<div className="aboutUsContainer">
			<div className="aboutUs">
				<div className="aboutUsHeader">
					<header>
						<h1>More About Us</h1>
						<h3>Some Information About Me and This App</h3>
					</header>
				</div>
				<aside>
					<div className="aboutUsInfo">
						<p>
							Hello my name is Kyle McCrear, I am currently a Glasgow Caledonian
							University student studying Software Development for Business.{" "}
							<br /> <br /> I'm looking to become a software engineer once I
							have finished university.
							<br /> Currently I'm looking to take part in some internships and
							get experience as a developer before completing my degree.
						</p>
						<p>
							This app has been developed as part of my Web Application
							Development Courswork.
						</p>
					</div>
				</aside>
				<main>
					<div className="contactUs">
						<fieldset>
							<form>
								<label>First Name - </label>
								<input
									type="text"
									required
									onChange={(e) => setFirstName(e.target.value)}
								/>
								<label>Surname - </label>
								<input
									type="text"
									required
									onChange={(e) => setSurName(e.target.value)}
								/>
								<label>Email - </label>
								<input
									type="email"
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
								<label>How did you hear about us?</label>
								<select onChange={(e) => setSelectOption(e.target.value)}>
									<option defaultValue=""></option>
									<option>Word of Mouth</option>
									<option>University</option>
									<option>Other</option>
								</select>
								<label>Send Us a Message</label>
								<textarea onChange={(e) => setMessage(e.target.value)} />
								<button onClick={contactUs}>Send</button>
							</form>
						</fieldset>
					</div>
				</main>
			</div>
		</div>
	);
}
