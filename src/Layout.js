import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";

export default function Layout() {
	return (
		<body>
			<NavBar />
			<main className="mt-20">
				<Outlet />
			</main>
			<Footer />
		</body>
	);
}
