import React from "react";
import "../css/hero-scroll.css";

function ScrollAnimation() {
	return (
		<div className="scrolldown scale-75 relative w-[30px] h-[50px] mx-[15px] rounded-[50px] box-border mb-4">
			<div className="chevrons pt-[6px] ml-[-3px] mt-12 w-[30px] flex flex-col items-center">
				<div className="chevrondown relative inline-block h-[10px] w-[10px] mt-[-6px]"></div>
				<div className="chevrondown relative inline-block h-[10px] w-[10px] mt-[-6px]"></div>
			</div>
		</div>
	);
}

export default ScrollAnimation;
