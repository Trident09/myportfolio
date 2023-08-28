import React from "react";
import "../css/about-button.css";
import { Link } from "react-router-dom";

const AboutButton = ({ Texts }) => {
	return (
		<div className=" container-btn py-2 flex flex-row">
			{Texts.map((text) => (
				<Link
					to={text.link}
					target={text.target}
				>
					<div class="buttons">
						<button class={text.classbtn}>
							<span></span>
							<p
								className={text.classp}
								data-start="good luck!"
								data-text={text.text}
								data-title={text.title}
							></p>
						</button>
					</div>
				</Link>
			))}
		</div>
	);
};

export default AboutButton;
