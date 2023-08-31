import React from "react";
import "../css/hero-button.css";
import { Link } from "react-scroll";

function HeroButton() {
	return (
		<Link
			to={"about"}
			smooth={true}
			duration={500}
		>
			<button className="button bg-transparent relative overflow-hidden cursor-pointer font-normal text-[17px] uppercase z-[1] rounded-[0.3em] py-[0.8em] px-[1.7em]">
				{" "}
				KNOW MORE
			</button>
		</Link>
	);
}

export default HeroButton;
