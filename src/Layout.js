import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import PreLoader from "./components/PreLoader";

export default function Layout() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fakeDataFetch = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 1500);
		};
		fakeDataFetch();
	}, []);
	return isLoading ? (
		<PreLoader />
	) : (
		<body>
			<NavBar />
			<main className="mt-20">
				<Outlet />
			</main>
			<Footer />
		</body>
	);
}
