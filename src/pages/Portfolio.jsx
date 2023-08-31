import React from "react";
import { PortfoliosAll } from "../Assets/Menus";
import ProjectCard from "../components/ProjectCard";
import "../css/project-section.css";

function Portfolio() {
	return (
		<section
			id="portfolio"
			className="py-16 px-10 md:px-20 w-full min-h-screen bg-blue-300 text-blue-900 flex flex-col justify-center items-center"
		>
			<div
				class="section-portfolio py-4 px-0"
				id="portfolio-section"
			>
				<div class="my-0 py-0">
					<h2 class="common-heading text-3xl font-semibold capitalize relative leading-normal mb-5 w-max">
						All Projects That I've Worked On
					</h2>
					<p className="text-[#777] text-xl leading-relaxed w-[85%] tracking-wide">
						I like to work on small applications which help me in
						improving my knowledge about the topic. Here are a few
						design projects I've worked on recently. Want to see
						more? Visit the full page below.
					</p>
				</div>
			</div>
			<ProjectCard Projects={PortfoliosAll} />
		</section>
	);
}

export default Portfolio;
