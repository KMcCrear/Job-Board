import React from "react";

export default function AboutUs() {
	return (
		<div className="aboutUseContainer">
			<div className="aboutUS">
				<div className="aboutUseHeader">
					<header>
						<h1>More About Us</h1>
					</header>
				</div>
				<aside>
					<div className="aboutUseInfo">
						<h2>Some Information About Me and This App</h2>
						<p>
							Hello my name is Kyle McCrear, I am currently a Glasgow Caledonian
							University student studying Software Development for Business
						</p>
					</div>
				</aside>
				<main>
					<div className="contactUs">
						<fieldset>
							<form>
								<label>First Name</label>
								<input type="text" required />
								<label>Surname</label>
								<input type="text" required />
								<label>Email</label>
								<input type="email" required />
								<label>How did you hear about us?</label>
								<select>
									<option defaultValue=""></option>
									<option>Word of Mouth</option>
									<option>University</option>
									<option>Other</option>
								</select>
								<label>Message Us</label>
								<input type="text" />
							</form>
						</fieldset>
					</div>
				</main>
			</div>
		</div>
	);
}
