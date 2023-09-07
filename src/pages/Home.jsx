import React from "react";
import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import ResourcesSection from "../components/ResourcesSection";

function Home() {
	return (
		<div>
			<Hero />
			<AboutSection />
			<ResourcesSection />
			<ProjectSection />
		</div>
	);
}

export default Home;
