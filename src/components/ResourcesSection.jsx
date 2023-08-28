import React from "react";
import { ServiceBtns, Services } from "../Assets/Menus";
import "../css/resources-section.css";
import AboutButton from "./AboutButton";

function ResourcesSection() {
	return (
		<section
			id="services"
			className="py-16 px-10 md:px-20 w-full min-h-screen bg-blue-200 text-blue-900 flex flex-col justify-center items-center"
		>
			<div className="py-[1rem] px-0 section-services">
				<div className="my-0 py-0">
					<h2 className="common-heading text-3xl font-semibold capitalize relative leading-normal mb-5 w-max">
						WHAT I DO !
					</h2>
					<p className="text-[#777] text-xl leading-relaxed w-[85%] tracking-wide">
						I am a full stack web developer and designer. I am also a hobbyist photographer. I can
						provide clean code and pixel perfect design. I also make
						website more & more interactive with web animations. I
						have more than 2 years of experience in software
						development.
					</p>
				</div>
				<div className="service-con mt-8 mb-0 mx-auto grid gap-10">
					{Services.map((service) => (
						<div class="service-box text-center rounded-md py-6 px-[1.4rem]">
							<ion-icon
								name={service.icon}
								class="service-icon w-16 h-16 inline-block py-[1.4rem] px-[1.8rem] relative"
							></ion-icon>
							<div className="flex flex-col items-center justify-center">
								<h3 className="text-2xl font-normal capitalize mt-3 mb-1">
									{service.name}
								</h3>
							</div>
							<div className="flex flex-col items-center justify-center">
								<p className="text-[#777] text-base leading-relaxed">
									{service.text}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<AboutButton Texts={ServiceBtns} />
			</div>
		</section>
	);
}

export default ResourcesSection;
