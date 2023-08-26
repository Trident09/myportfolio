import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import HeroButton from "./HeroButton";

function Hero() {
	return (
		<section
			id="hero"
			className="text-blue-100"
		>
			<div className="w-full py-16 px-10 md:px-20 min-h-screen flex flex-col items-start justify-center">
				<h1 className="text-4xl font-bold leading-loose">
					Hi, my name is{" "}
					<span className="font-extrabold text-6xl text-cyan-500 md:flex-col">
						RUPAM{" "}
						<b className="opacity-95 text-cyan-300 text-5xl">
							BARUI
						</b>
					</span>
					<br />
					<span>
						I'm the{" "}
						<b className="text-cyan-300">Software Developer.</b>
					</span>
				</h1>
				<div className="flex flex-row gap-4 justify-center items-center">
					<HeroButton />
					<ScrollAnimation />
				</div>
			</div>
		</section>
	);
}

export default Hero;
