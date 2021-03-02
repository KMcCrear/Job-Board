import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PayCalc from "./Pages/PayCalc";
import JobInfo from "./Pages/JobInfo";
import AboutUs from "./Pages/AboutUs";

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/" exact render={(props) => <Home />} />
				<Route path="/paycalc" render={(props) => <PayCalc />} />
				<Route path="/jobinfo" render={(props) => <JobInfo />} />
				<Route path="/aboutus" render={(props) => <AboutUs />} />
			</Router>
		</div>
	);
}

export default App;
