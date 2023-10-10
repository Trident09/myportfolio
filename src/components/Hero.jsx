import React from "react";
import HeroButton from "./HeroButton";
import ScrollAnimation from "./ScrollAnimation";

function Hero() {
	return (
		<section
			id="hero"
			className="text-snow"
		>
			<div className="w-full py-16 px-10 md:px-20 min-h-screen flex flex-col items-start justify-center">
				<h1 className="text-4xl font-bold leading-loose">
					Hi there, my name is{" "}
					<span className="font-extrabold text-6xl text-important md:flex-col">
						RUPAM <b className="opacity-95 text- text-5xl">BARUI</b>
					</span>
					<br />
					<span>
						I'm the <b className="text-important">Unknown Developer.</b>
					</span>
					<p className="text-xl font-medium tracking-[3px] text-light leading-loose py-10 max-w-full lg:max-w-[40%]">
						As a Designer and Web Developer, I thrive on creative
						tasks that allow me to push the boundaries of what's
						possible.
					</p>
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
