import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../Assets/Menus";
import { FooterCSS } from "../../css/stylesheet";
import SocialIcons from "./SocialIcons";
import Waves from "./Waves";

const Footer = () => {
	return (
		<footer
			id="footer"
			className={FooterCSS.footer}
		>
			<Waves />
			<div className={FooterCSS.footerWrapper}>
				<div className={FooterCSS.footerContainer}>
					<h1 className={FooterCSS.footerHeading}>
						Want to get in{" "}
						<b className={FooterCSS.footerImp}>TOUCH</b>?
					</h1>
					<div className={FooterCSS.buttonContainer}>
						<button className={FooterCSS.actionButton}>
							<Link to="/contact">CONTACT ME</Link>
						</button>
					</div>
				</div>
				<div className={FooterCSS.linksContainer}>
					<span>© 2023. All rights reserved.</span>
					<span>
						Made with <ion-icon name="heart"></ion-icon> · Rupam
						Barui
					</span>
					<SocialIcons Icons={Icons} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
