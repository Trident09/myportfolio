import React from "react";
import { Link } from "react-router-dom";
import "../css/project-card.css";

const ProjectCard = ({ Projects }) => {
	return (
		<div class="project-con grid gap-10 mt-8 mb-0 px-8 items-center justify-center w-full">
			{Projects.map((project) => (
				<div className="card">
					<img
						src={project.src}
						alt={project.alt}
					/>
					<div class="card__content">
						<p class="card__title">{project.name}</p>
						<p class="card__description">{project.desc}</p>
						<Link
							to={project.demo}
							target="_blank"
						>
							<button class="card__button">Live Demo</button>
						</Link>
						<Link
							to={project.source}
							target="_blank"
						>
							<button class="card__button secondary">
								Source Code
							</button>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectCard;
