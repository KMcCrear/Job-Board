import React, { useState } from "react";

export default function JobInfo() {
	const [jobTitle, setJobTitle] = useState("");
	const [jobData, setJobData] = useState([]);

	async function getData(e) {
		e.preventDefault();
		if (jobTitle == "") {
			alert("Please Enter a Valid Job");
		} else {
			await fetch(
				`http://api.lmiforall.org.uk/api/v1/soc/search?q=${jobTitle}`
			).then((response) =>
				response
					.json()
					.then((data) => ({
						data: data,
					}))
					.then((res) => {
						if (res.data <= 0) {
							alert("Please Try Again - No Job Match");
						} else {
							const dataArray = res.data;
							dataArray.slice(0, 10);
							renderTitles(dataArray);
						}
					})
			);
		}
	}

	async function getPayData(e, socCode, title, desc, qual, tasks) {
		e.preventDefault();
		console.log(desc);
		if (!socCode) {
			alert("Error Please try again");
		} else {
			await fetch(
				`http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=${socCode}`
			).then((response) =>
				response
					.json()
					.then((data) => ({
						data: data,
					}))
					.then((res) => {
						let payInfo = res.data;
						let payObject = getRecentPay(payInfo.series);
						let estPay = payObject.estpay;
						let year = payObject.year;
						estPay *= 52;
						let jobInfo = createjobObjects(
							title,
							estPay,
							year,
							desc,
							qual,
							tasks
						);
						renderJobInfo(jobInfo);
					})
			);
		}
	}

	const getRecentPay = (payInfo) => {
		let mostRecentPay = 0;
		let temp = 0;
		for (let i = 0; i < payInfo.length; i++) {
			if (payInfo[i].year > temp) {
				temp = payInfo[i].year;
				mostRecentPay = payInfo[i];
			}
		}
		//mostRecentPay = temp;
		console.log(payInfo);
		return mostRecentPay;
	};

	const createjobObjects = (title, pay, year, desc, qual, tasks) => {
		let jobArray = [];
		let allJobInfo = {
			title: title,
			pay: pay,
			year: year,
			desc: desc,
			qualfications: qual,
			tasks: tasks,
		};
		jobArray.push(allJobInfo);
		return jobArray;
	};

	const renderTitles = (anArray) => {
		let renderJobInfo = anArray.map((titles) => (
			<div className="loadedJobInfo" key={titles.soc}>
				<div className="jobTitles">{titles.title}</div>
				<div className="buttonDiv">
					<button
						onClick={(e) =>
							preventDefault(
								e,
								titles.soc,
								titles.title,
								titles.description,
								titles.qualifications,
								titles.tasks
							)
						}
					>
						Select
					</button>
				</div>
			</div>
		));
		setJobData(renderJobInfo);
	};

	const preventDefault = (e, soc, title, desc, qual, tasks) => {
		e.preventDefault();
		let socCode = soc;
		getPayData(e, socCode, title, desc, qual, tasks);
	};

	const renderJobInfo = (jobInfo) => {
		let jobToRender = jobInfo.map((job) => (
			<div className="jobDetails" key={job.title}>
				Title: {job.title} <br />
				Yearly Salary: £{job.pay} as of ({job.year}) <br />
				Desciption: {job.desc} <br />
				Qualifications: {job.qualfications} <br />
				Tasks: {job.tasks}
			</div>
		));
		setJobData(jobToRender);
	};

	return (
		<div className="Contianer">
			<div className="jobInfo">
				<header>
					<h1>Looking For a New Job?</h1>
					<h2>Start Your Search Here</h2>
				</header>
				<main>
					<div className="searchContainer">
						<div className="searchBar">
							<form>
								<input
									type="text"
									onChange={(e) => setJobTitle(e.target.value)}
									onSubmit={getData}
								/>
								<button onClick={(e) => getData(e)}>&rarr;</button>
							</form>
						</div>
					</div>
				</main>
				<section>
					<form>
						<div className="loadJobData">{jobData}</div>
					</form>
				</section>
			</div>
		</div>
	);
}
