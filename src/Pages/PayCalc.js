import { Label } from "@material-ui/icons";
import React, { useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function PayCalc() {
	const [salary, setSalary] = useState();

	const calculatePay = () => {
		// let yearlyPay = year * 52;
		// let monthylyPay = (month * 52) / 12;
		// let hourly = month / hoursWorked;
	};

	return (
		<div>
			<div className="Container">
				<div>
					<NavBar />
				</div>
				<div className="payContainer">
					<div className="payDesc">
						<h3>Pay Calculator</h3>
						<p>Calculate your year/monthly and hourly wage here</p>
					</div>
					<form className="paymentForm">
						<label>Enter Salary</label>
						<input
							type="number"
							onChange={(e) => {
								setSalary(e.target.value);
							}}
						/>
						<form className="radioButtons">
							<input type="radio" id="Yearly" name="salary" value="Yearly" />
							<label for="Yearly">Yearly</label>
							<input type="radio" id="Monthly" name="salary" value="Monthly" />
							<label for="Monthly">Monthly</label>
							<input type="radio" id="Hourly" name="salary" value="Hourly" />
							<label for="Hourly">Hourly</label>
						</form>
						<button onClick={calculatePay}>Calculate</button>
					</form>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
