import React from "react";
import calculateImage from "../images/calculateImage.jpg";
import searchImage from "../images/job-search-image.jpg";
import aboutUsImage from "../images/about-us-image.png";

export default function Home() {
	return (
		<div className="homeContainer">
			<div className="homeHeader">
				<header>
					<h1>Welcome to GCU Job Search</h1>
					<h3>Find Your Dream Job Here</h3>
				</header>
			</div>
			<div className="homeMain">
				<main>
					<div className="homePics">
						<a href="/paycalc">
							<img
								className="homeImg"
								src={calculateImage}
								alt="calculator"
								title="Pay Calc"
							/>
							<p className="imageDesc">Pay Calculator</p>
						</a>
						<a href="/jobinfo">
							<img
								className="homeImg"
								src={searchImage}
								alt="jobs in a newspaprer"
								title="Job Info"
							/>
							<p className="imageDesc">Job Information</p>
						</a>
						<a href="/aboutus">
							<img
								className="homeImg"
								src={aboutUsImage}
								alt="page with people pointing showing about us"
								title="About Us"
							/>
							<p className="imageDesc">About us</p>
						</a>
					</div>
				</main>
			</div>
			<div className="descOfPages">
				<section>
					<div className="payCalcDesc">
						<h3>Pay Calculator - </h3>
						<div>
							<p>
								Pay Calculator will help you organise and efforlessly help your
								job life. This page will calculate your pay based on pay and
								hours worked duirng the week
							</p>
						</div>
					</div>
					<div className="searchDesc">
						<h3>Job Search - </h3>
						<div>
							<p>
								Looking for a new job? This is the perfect place! Search for
								Jobs here and find your dream job
							</p>
						</div>
					</div>
					<div className="aboutUsDesc">
						<h3>About Us - </h3>
						<div>
							<p>
								Want to know us better? This is the perfect place to learn about
								who made this site. You can even contact us via this page
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
