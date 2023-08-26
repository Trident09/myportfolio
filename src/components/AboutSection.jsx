import React from "react";
import "../css/about-section.css";

function AboutSection() {
	return (
		<section
			id="about"
			className="px-10 md:px-20 w-full min-h-screen bg-[#2b2a2f] flex justify-center items-center"
		>
			<div className="about_container w-full py-16">
				<div className="about_contents">
					<div className="imageSection relative">
						<img
							className="w-full h-full object-cover relative z-10"
							src="https://raw.githubusercontent.com/Trident09/myportfolio/main/src/Assets/Rupam-about.png"
							alt="Rupam Barui"
						/>
					</div>
					<div className="infoSection">
						<h1 className="text-[#dedce1] text-3xl font-[helvetica] uppercase inline-block mb-1 relative">
							About Me
						</h1>
						<h2 className="font-[helvetica] text-xl font-semibold text-[#787cd5] py-4 px-0 capitalise tracking-[1px]">
							Software developer & designer, currently going
							through college
						</h2>
						<p className="text-[#aaabb0] text-lg leading-tight text-justify pb-2">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Unde, cupiditate. Nemo, aut!
						</p>
						<p className="text-[#aaabb0] text-lg leading-tight text-justify pb-2">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Perspiciatis ab voluptatem impedit hic
							repellendus nobis, architecto molestiae saepe
							aliquid. A odit consectetur reprehenderit amet
							similique quo dolores eaque obcaecati quibusdam?
						</p>
						<div className="personalIn">
							<div>
								<span>Name: </span>
								<span>Rupam Barui</span>
							</div>
							<div>
								<span>Age: </span>
								<span>19+ Years</span>
							</div>
							<div>
								<span>Email: </span>
								<span>rupambarui.17@gmail.com</span>
							</div>
							<div>
								<span>Location: </span>
								<span>Delhi, India</span>
							</div>
						</div>
						<div className="aboutbutton">Download Resume</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
