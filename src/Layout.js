import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import PreLoader from "./components/PreLoader";

export default function Layout() {
	return (
		<>
			<body>
				{/* <PreLoader /> */}
				<NavBar />
				<main className="mt-20">
					<Outlet />
				</main>
				<Footer />
			</body>
		</>
	);
}
