import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PayCalc from "./Pages/PayCalc";
import JobInfo from "./Pages/JobInfo";
import AboutUs from "./Pages/AboutUs";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import JobInfoTest from "./Pages/JobInfoTest";

function App() {
	return (
		<div className="App">
			<nav>
				<NavBar />
			</nav>
			<Router>
				<Route path="/" exact render={(props) => <Home />} />
				<Route path="/paycalc" render={(props) => <PayCalc />} />
				<Route path="/jobinfo" render={(props) => <JobInfo />} />
				<Route path="/aboutus" render={(props) => <AboutUs />} />
				<Route path="/jobinfotest" render={() => <JobInfoTest />} />
			</Router>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
