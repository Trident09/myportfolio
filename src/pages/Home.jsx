import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ProjectSection from "../components/ProjectSection";
import BlogSection from "../components/BlogSection";

function Home() {
	return (
		<div>
			<Hero />
			<AboutSection />
			<ServiceSection />
			<ProjectSection />
			<BlogSection />
		</div>
	);
}

export default Home;
