import React from "react";
import { Link } from "react-router-dom";
import "../css/project-card.css";

const ProjectCard = ({ Projects }) => {
	return (
		<div class="project-con grid gap-10 mt-8 mb-0 px-8 items-center justify-center w-full">
			{Projects.map((project) => (
				<div className="card relative w-[350px] aspect-video bg-important rounded-[10px] flex items-center justify-center overflow-hidden mx-0">
					<img
						src={project.src}
						alt={project.alt}
						loading="lazy"
					/>
					<div class="card__content absolute w-full h-full top-0 left-0 p-5 bg-blue-300">
						<p class="card__title m-0 text-xl text-bg font-bold">
							{project.name}
						</p>
						<p class="card__description my-[10px] text-xs text-bg leading-[1.4]">
							{project.desc}
						</p>
						<Link
							to={project.demo}
							target="_blank"
						>
							<button class="card__button p-[15px] rounded-[8px] bg-action text-snow hover:text-bg hover:bg-action">
								Live Demo
							</button>
						</Link>
						<Link
							to={project.source}
							target="_blank"
						>
							<button class="card__button p-[15px] rounded-[8px] bg-transparent text-action hover:text-bg secondary ml-4 hover:bg-action">
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
