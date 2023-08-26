import { React, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	let Links = [
		{ name: "ABOUT", link: "/about" },
		{ name: "SERVICE", link: "/services" },
		{ name: "PORTFOLIO", link: "/portfolio" },
		{ name: "BLOG", link: "/" }, //external link
		{ name: "CONTACT", link: "/contact" },
	];
	let [open, setOpen] = useState(false);
	return (
		<div className="z-50 shadow-md w-full fixed top-0 left-0">
			<div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
				<div className="font-normal text-2xl cursor-pointer flex items-center font-[Anton] text-white">
					<span className="text-3xl text-white mr-1 pt-2">
						<ion-icon
							name="aperture"
						></ion-icon>
					</span>
					<Link to="/">
						<span className="flex flex-row gap-1 hover:text-cyan-300">
							Rupam <b className="text-cyan-300">B.</b>
						</span>
					</Link>
				</div>
				<div
					onClick={() => setOpen(!open)}
					className="text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
				>
					<ion-icon name={open ? "close" : "menu"}></ion-icon>
				</div>
				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "top-20 " : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li
							key={link.name}
							className="md:ml-8 text-xl md:my-0 my-7"
						>
							<a
								href={link.link}
								className="text-white hover:text-cyan-300 duration-500"
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
