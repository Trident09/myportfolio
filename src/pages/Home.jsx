import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import BlogSection from "../components/BlogSection";
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
