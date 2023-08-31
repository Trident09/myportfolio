import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import PreLoader from "./components/PreLoader";
import Footer from "./components/footer/Footer";

export default function Layout() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const delay = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 1500);
		};
		delay();
	}, []);
	return isLoading ? (
		<PreLoader />
	) : (
		<body>
			<NavBar />
			<main className="pt-20">
				<Outlet />
			</main>
			<Footer />
		</body>
	);
}
