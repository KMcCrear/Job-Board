import React, { useState } from "react";

export default function PayCalc() {
	const [salary, setSalary] = useState();
	const [paymentType, setPaymentType] = useState(null);
	const [yearlySalary, setYearlySalary] = useState();
	const [weeklySalary, setWeeklySalary] = useState();
	const [monthlySalary, setMonthlySalary] = useState();
	const [hourlySalary, setHourlySalary] = useState();
	const [hoursWorked, setHoursWorked] = useState();
	const [showPayData, setShowPayData] = useState(false);

	const calculatePay = (e) => {
		e.preventDefault();
		setShowPayData(true);
		switch (paymentType) {
			case "Monthly":
				setYearlySalary(Math.round(salary * 12 * 100) / 100);
				setMonthlySalary(Math.round(salary));
				setWeeklySalary(Math.round((salary / 4) * 100) / 100);
				setHourlySalary(Math.round((salary / 4 / hoursWorked) * 100) / 100);
				break;
			case "Weekly":
				setYearlySalary(Math.round(salary * 52 * 100) / 100);
				setMonthlySalary(Math.round(((salary * 52) / 12) * 100) / 100);
				setWeeklySalary(salary);
				setHourlySalary(Math.round((salary / hoursWorked) * 100) / 100);
				break;
			case "Hourly":
				setYearlySalary(Math.round(salary * 52 * 100) / 100);
				setMonthlySalary(Math.round(salary * hoursWorked * 4 * 100) / 100);
				setWeeklySalary(Math.round(salary * hoursWorked * 100) / 100);
				setHourlySalary(Math.round(salary * 100) / 100);
				break;
		}
	};

	const Results = () => (
		<div className="showPayData" id="Results">
			<table className="payTable">
				<thead>
					<tr>
						<th>Salary</th>
						<th>Pay Rate</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>£ {yearlySalary}</td>
						<td>Yearly</td>
					</tr>
					<tr>
						<td>£ {monthlySalary}</td>
						<td>Monthly</td>
					</tr>
					<tr>
						<td>£ {weeklySalary}</td>
						<td>Weekly</td>
					</tr>
					<tr>
						<td>£ {hourlySalary}</td>
						<td>Hourly</td>
					</tr>
				</tbody>
			</table>
		</div>
	);

	return (
		<div>
			<div className="Container">
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
					<form className="selectors">
						<select
							name="payRate"
							onChange={(e) => {
								setPaymentType(e.target.value);
							}}
						>
							<option defaultValue="Select"></option>
							<option value="Monthly">Monthly</option>
							<option value="Weekly">Weekly</option>
							<option value="Hourly">Hourly</option>
						</select>
						<button id="selectorButton" onClick={(e) => calculatePay(e)}>
							Calculate Salary
						</button>
					</form>
					<div className="loadedPayData">{showPayData ? <Results /> : ""}</div>
				</div>
			</div>
		</div>
	);
}
