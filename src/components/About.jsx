import React from "react";

function About() {
	return (
		<section
			id="about"
			className="py-16 px-10 md:px-20 w-full bg-blue-100 text-blue-900 flex justify-center items-center"
		>
			<div className="flex flex-col md:flex-row md:gap-16 justify-center items-center">
                <div>
                    <img className="h-96 w-auto" src="https://raw.githubusercontent.com/Trident09/myportfolio/main/src/Assets/Rupam-about.png" alt="Rupam Barui" />
                </div>
                <div className="">
                    about
                </div>
            </div>
		</section>
	);
}

export default About;
