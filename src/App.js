import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import AboutMe from "./pages/AboutMe";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<AboutMe />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/portfolio"
					element={<Portfolio />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
