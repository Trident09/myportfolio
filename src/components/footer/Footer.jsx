import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../Assets/Menus";
import SocialIcons from "./SocialIcons";

const Footer = () => {
	return (
		<footer
			id="footer"
			className="bg-gray-900 text-white"
		>
			<div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
				<h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
					Want to get in{" "}
					<b className="text-cyan-400 hover:text-cyan-600 font-medium">
						TOUCH
					</b>
					?
				</h1>
				<div className="flex flex-col md:flex-row">
					<button className="bg-cyan-400 hover:bg-cyan-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-max w-full h-max capitalize">
						<Link to="/contact">CONTACT ME</Link>
					</button>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
				<span>© 2023 Appy. All rights reserved.</span>
				<span>
					Made with <ion-icon name="heart"></ion-icon> · Rupam Barui
				</span>
				<SocialIcons Icons={Icons} />
			</div>
		</footer>
	);
};

export default Footer;
