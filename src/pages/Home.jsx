import React from "react";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
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
			<BlogSection />
		</div>
	);
}

export default Home;
