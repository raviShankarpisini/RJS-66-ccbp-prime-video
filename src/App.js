import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import TeamMatches from "./components/TeamMatches";

import "./App.css";

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/team-matches/:id" component={TeamMatches} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default App;
