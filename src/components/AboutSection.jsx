import React from "react";
import { AboutBtns, Abouts, Details, Skills } from "../Assets/Menus";
import aboutImage from "../Assets/Rupam-about.png";
import "../css/about-section.css";
import AboutButton from "./AboutButton";
import LeftSkewDown from "./LeftSkewDown";

function AboutSection() {
	return (
		<section
			id="about"
			className="flex flex-col justify-center items-center"
		>
			<div className="px-10 md:px-20 w-full min-h-[93vh] bg-secondarybg flex justify-center items-center pb-0 mb-0">
				<div className="about_container w-full py-16">
					<div className="about_contents grid">
						<div className="imageSection relative aspect-[9/16] min-w-[300px] h-[380px]">
							<img
								className="w-full h-full aspect-[9/16] object-cover relative z-10"
								src={aboutImage}
								alt="Rupam Barui"
								loading="lazy"
							/>
						</div>
						<div className="infoSection">
							<h1 className="text-important text-3xl font-[helvetica] uppercase inline-block mb-1 relative">
								About Me
							</h1>
							<h2 className="font-[helvetica] text-xl font-semibold text-important py-4 px-0 capitalise tracking-[1px]">
								Software developer & designer, currently going
								through college
							</h2>
							{Abouts.map((about) => (
								<p className="text-darksnow text-lg leading-tight text-justify pb-2">
									{about.content}
								</p>
							))}
							<div className="personalInfo grid mt-[14px] pb-[10px]">
								{Details.map((detail) => (
									<div className="grid detail_info">
										<span className="text-light tracking-[1px] ">
											{detail.name}
										</span>
										<span className="text-light tracking-[1px] ">
											{detail.content}
										</span>
									</div>
								))}
							</div>
							<AboutButton Texts={AboutBtns} />
						</div>
						<div className="skillsSection grid">
							{Skills.map((skill) => (
								<div className="skill">
									<div className="subject text-lg font-thin text-snow pb-[10px] uppercase tracking-[1px]">
										{skill.name}
									</div>
									<div className="progress_bar w-full h-4 bg-bg py-1 px-[6px] rounded-2xl">
										<div
											className={skill.class}
											value={skill.value}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<LeftSkewDown />
		</section>
	);
}

export default AboutSection;
