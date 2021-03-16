import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function Home() {
	return (
		<div className="Container">
			<div className="welcome">
				<h3>Welcome</h3>
				<p>
					Welcome to the GCU Job Board - calculate pay and search for new jobs
				</p>
			</div>
			<main className="homeContent">
				<div className="homeDesc">
					<p>
						GCU Job Board gives you access to calculate yearly/monthly/hourly
						pay, Seach for new jobs and contact us
					</p>
				</div>
				<div></div>
			</main>
		</div>
	);
}
