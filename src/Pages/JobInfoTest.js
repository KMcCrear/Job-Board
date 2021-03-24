import React, { useState } from "react";

const JobInfoTest = () => {
	const [jobSearch, setJobSearch] = useState();
	const [jobData, setJobData] = useState();
	const listOfJobs = [];

	async function getJobData(e) {
		e.preventDefault();
		if (jobSearch == "") {
			alert("Please Enter a Valid Job");
		} else {
			await fetch(
				`http://api.lmiforall.org.uk/api/v1/soc/search?q=${jobSearch}`
			).then((response) =>
				response
					.json()
					.then((data) => ({
						data: data,
					}))
					.then((res) => {
						const arrayOfJobObjects = res.data;
						let socCodes = [];
					})
			);
		}
	}

	const createSingularJobObjects = (jobInfoObject) => {
		let job = {
			soc: jobInfoObject.soc,
			title: jobInfoObject.title,
			description: jobInfoObject.description,
			tasks: jobInfoObject.tasks,
		};
		return job;
	};

	return (
		<div className="Contianer">
			<div className="jobInfo">
				<header>
					<h1>Want a new Job?</h1>
					<h2>Start Here</h2>
				</header>
				<div className="searchBar">
					<form>
						<input
							type="text"
							onChange={(e) => setJobSearch(e.target.value)}
							onSubmit={getJobData}
						/>
						<button onClick={(e) => getJobData(e)}>&rarr;</button>
					</form>
				</div>
				<form>
					<div className="loadJobData">{jobData}</div>
				</form>
			</div>
		</div>
	);
};

export default JobInfoTest;
