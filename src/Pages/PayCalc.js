import React from "react";
import NavBar from "../Components/NavBar";

export default function PayCalc() {
	return (
		<div>
			<div className="container">
				<div>
					<NavBar />
				</div>
				<div className="payContainer">
					<div className="payDesc">
						<h3>Pay Calculator</h3>
						<p>Calculate your year/monthly and hourly wage here</p>
					</div>
					<fieldset className="paymentField">
						<label></label>
						<input type="number" />
					</fieldset>
				</div>
			</div>
		</div>
	);
}
