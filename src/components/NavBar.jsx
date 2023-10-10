import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Links } from "../Assets/Menus";

const NavBar = () => {
	let [open, setOpen] = useState(false);
	return (
		<div className="z-40 shadow-md w-full fixed top-0 left-0">
			<div className="md:flex items-center justify-between bg-midnight py-4 md:px-10 px-7">
				<div className="font-normal text-2xl flex items-center font-[Anton] text-snow">
					<span className="text-3xl text-action mr-1 pt-2">
						<ion-icon name="aperture"></ion-icon>
					</span>
					<a href="/">
						<span className="flex flex-row gap-1 hover:text-action cursor-pointer ">
							Rupam <b className="text-action">B.</b>
						</span>
					</a>
				</div>
				<div
					onClick={() => setOpen(!open)}
					className="text-snow text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
				>
					<ion-icon
						name={open ? "close" : "menu"}
						className="cursor-pointer text-snow hover:text-imps"
					></ion-icon>
				</div>
				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-midnight md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "top-20 " : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li
							key={link.name}
							className="md:ml-8 text-xl md:my-0 my-7"
							onClick={() => setOpen(false)}
						>
							<Link
								to={link.link}
								className="text-snow hover:text-action duration-500 cursor-pointer"
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
