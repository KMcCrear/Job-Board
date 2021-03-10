import { CenterFocusStrongOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function JobInfo() {
	const [jobTitle, setJobTitle] = useState("");
	const [jobData, setJobData] = useState([]);
	const [socCode, setSocCode] = useState(0);

	async function getData() {
		if (jobTitle == "") {
			setJobTitle("Please Enter a Valid Location");
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
						const dataArray = res.data;
						const renderedDivs = formatData(dataArray);
						setJobData(renderedDivs);
					})
			);
		}
	}

	const formatData = (dataArray) => {
		let titles = [];
		let desc = [];
		for (let i = 0; i < dataArray.length; i++) {
			titles.push(dataArray[i].title);
			desc.push(dataArray[i].description);
			console.log(dataArray[i].soc);
		}
		let divs = createDivs(titles, desc);
		return divs;
	};

	const createDivs = (jobArray, desc) => {
		let renderDiv = jobArray.map((titles) => (
			<div className="jobTitles" key={titles}>
				{titles}
				{/* <button onClick={console.log("Hello")}>More Information</button> */}
			</div>
		));
		return renderDiv;
	};

	return (
		<div>
			<div className="Contianer">
				<nav>
					<NavBar />
				</nav>
				<div className="jobInfo">
					<header>
						<h1>Want a new Job?</h1>
						<h2>Start Here</h2>
					</header>
					<div className="searchBar">
						<form>
							<input
								type="text"
								onChange={(e) => setJobTitle(e.target.value)}
							/>
						</form>
						{/* API call works when the button is here. This is why it's not places in the form */}
						<button onClick={getData}>&rarr;</button>
					</div>
					<form>
						<div className="loadJobData">Job Titles: {jobData}</div>
					</form>
					<footer>
						<Footer />
					</footer>
				</div>
			</div>
		</div>
	);
}
