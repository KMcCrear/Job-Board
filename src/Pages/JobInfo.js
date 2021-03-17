import React, { useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function JobInfo() {
	const [jobTitle, setJobTitle] = useState("");
	const [jobData, setJobData] = useState([]);
	const [showDesc, setShowDesc] = useState(false);

	const [title, setTitle] = useState();
	const [desc, setDesc] = useState();
	const [qual, setQual] = useState();
	const jobObjects = [];

	async function getData() {
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
						const dataArray = res.data;
						const renderedDivs = formatData(dataArray);
						//setJobData(renderedDivs);
					})
			);
		}
	}

	async function getMoreInfo(socCodes) {
		for (let i = 0; i < socCodes.length; i++) {
			await fetch(
				`http://api.lmiforall.org.uk/api/v1/soc/code/${socCodes[i]}`
			).then((response) =>
				response
					.json()
					.then((data) => ({
						data: data,
					}))
					.then((res) => {
						const infoObject = res.data;
						let test = createDivs(infoObject);
						jobObjects.push(test);
						renderTitles(jobObjects);
					})
			);
		}
	}

	const formatData = (dataArray) => {
		let socCodes = [];
		for (let i = 0; i < dataArray.length; i++) {
			socCodes.push(dataArray[i].soc);
		}
		getMoreInfo(socCodes);
	};

	const createDivs = (infoObject) => {
		let allJobInfo = {
			soc: infoObject.soc,
			title: infoObject.title,
			desc: infoObject.description,
			qualifications: infoObject.qualifications,
		};

		return allJobInfo;
	};

	const renderTitles = (anArray) => {
		let renderStuff = anArray.map((titles) => (
			<div className="jobTitles" key={titles.soc}>
				{titles.title}
				<button
					onClick={(e) => {
						tester(
							e,
							setTitle(titles.title),
							setDesc(titles.desc),
							setQual(titles.qualifications)
						);
					}}
				>
					More info
				</button>
				<div>{showDesc ? <Results /> : ""}</div>
			</div>
		));
		setJobData(renderStuff);
	};

	const Results = () => (
		<div>
			<p>{title}</p>
			<p>{desc}</p>
		</div>
	);

	const tester = (e, titles, desc, qual) => {
		e.preventDefault();
		setShowDesc(true); // for some reason does not set showDesc to true
		//debugger;
		console.log(title);
		console.log(desc);
		console.log(qual);
	};

	return (
		<div>
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
								onChange={(e) => setJobTitle(e.target.value)}
							/>
						</form>
						{/* API call works when the button is here. This is why it's not placed in the form */}
						<button onClick={getData}>&rarr;</button>
					</div>
					<form>
						<div className="loadJobData">Job Titles: {jobData}</div>
					</form>
				</div>
			</div>
		</div>
	);
}
