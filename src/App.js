import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AboutMe from "./pages/AboutMe";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

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
					element={<ContactPage />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
