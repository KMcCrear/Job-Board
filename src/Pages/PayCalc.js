import React, { useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function PayCalc() {
	const [salary, setSalary] = useState();
	const [paymentType, setPaymentType] = useState(null);
	const [yearlySalary, setYearlySalary] = useState();
	const [weeklySalary, setWeeklySalary] = useState();
	const [monthlySalary, setMonthlySalary] = useState();
	const [hourlySalary, setHourlySalary] = useState();
	const [hoursWorked, setHoursWorked] = useState();

	const calculatePay = (e) => {
		e.preventDefault();
		switch (paymentType) {
			case "Monthly":
				setYearlySalary(Math.round(salary * 12 * 100) / 100);
				setMonthlySalary(Math.round(salary));
				setWeeklySalary(Math.round((salary / 4) * 100) / 100);
				setHourlySalary(Math.round((salary / hoursWorked) * 100) / 100);
				break;
			case "Weekly":
				break;
			case "Hourly":
				console.log("Hourly");
				break;
		}
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
						<label>Hours Worked a Week: </label>
						<input
							type="number"
							onChange={(e) => {
								setHoursWorked(e.target.value);
							}}
						/>
					</form>
					<form className="radioButtons">
						<input
							type="radio"
							id="Monthly"
							name="salary"
							value="Monthly"
							onClick={(e) => {
								setPaymentType(e.target.value);
							}}
						/>
						<label htmlFor="Monthly">Monthly</label>
						<input
							type="radio"
							id="Weekly"
							name="salary"
							value="Weekly"
							onClick={(e) => {
								setPaymentType(e.target.value);
							}}
						/>
						<label htmlFor="Weekly">Weekly</label>
						<input
							type="radio"
							id="Hourly"
							name="salary"
							value="Hourly"
							onClick={(e) => {
								setPaymentType(e.target.value);
							}}
						/>
						<label htmlFor="Hourly">Hourly</label>
						<button onClick={(e) => calculatePay(e)}>Calculate</button>
					</form>
					<div className="showPayData">
						<p>£ {yearlySalary}</p>
						<p>£ {monthlySalary}</p>
						<p>£ {weeklySalary}</p>
						<p>£ {hourlySalary}</p>
					</div>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
