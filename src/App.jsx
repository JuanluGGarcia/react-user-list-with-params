import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global-styles";
// import FilterUsers from "./components/filterusers/FilterUsers";
import Router from "./Router/Router";

const App = () => {
	return (
		<>
			<GlobalStyles />

			<BrowserRouter>
				<Router />
			</BrowserRouter>
		
		</>
	)
};

export default App;
