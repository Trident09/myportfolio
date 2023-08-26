import React from "react";
import "../css/hero-scroll.css";
import "../css/hero-button.css";
import { Link } from "react-scroll";

function Hero() {
	return (
		<section
			id="hero"
			class="text-blue-100"
		>
			<div class="w-full py-16 px-10 md:px-20 min-h-screen flex flex-col items-start justify-center">
				<h1 class="text-4xl font-bold leading-loose">
					Hi, my name is{" "}
					<span class="font-extrabold text-6xl text-cyan-500 md:flex-col">
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
					<Link
						to={"about"}
						smooth={true}
						duration={500}
					>
						<button class="button"> KNOW MORE</button>
					</Link>
					<div class="scrolldown scale-75">
						<div class="chevrons">
							<div class="chevrondown"></div>
							<div class="chevrondown"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
