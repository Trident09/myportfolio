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
			<button className="button"> KNOW MORE</button>
		</Link>
	);
}

export default HeroButton;
