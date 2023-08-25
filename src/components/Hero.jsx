import React from "react";

function Hero() {
	return (
		<section
			id="hero"
			class="text-blue-100"
		>
			<div class="w-full py-16 px-10 md:px-20 min-h-screen flex flex-col items-start justify-center">
				<h1 class="text-4xl font-bold leading-loose">
					Hi, my name is{" "}
					<span class="font-extrabold text-6xl text-cyan-500 md:flex-col">RUPAM <b className="opacity-95 text-cyan-300 text-5xl">BARUI</b></span>
					<br />
					<span>I'm the <b className="text-cyan-300">Software Developer.</b></span>
				</h1>
				<p class="text-white text-lg uppercase border-2 p-4 my-7 hover:bg-cyan-300 hover:text-black hover:border-black transition-colors">
					<a
						rel="noreferrer"
						class="cta-btn cta-btn--hero"
						href="#about"
					>
						Know more
					</a>
				</p>
			</div>
		</section>
	);
}

export default Hero;
