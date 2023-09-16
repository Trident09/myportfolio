// Navbar data

export const Links = [
	// { name: "ABOUT", link: "/about" },
	// { name: "RESOURCES", link: "/services" },
	{ name: "PROJECT", link: "/portfolio" },
	// { name: "BLOG", link: "/" },
	{ name: "CONTACT", link: "/contact" },
];

// About section data

export const Abouts = [
	{
		content:
			"I am a self-taught Software Developer and Designer from Delhi, India. I am currently pursuing my B.Tech M.Tech in Computer Science and Engineering from National Forensic Sciences University, Delhi.",
	},
	{
		content:
			"Through my studies, I have gained a solid understanding of the underlying principles of computer science, as well as the practical skills necessary to develop and implement complex web-based applications. I am excited to continue my studies and to apply my skills to real-world projects in the future.",
	},
	{
		content:
			"I am both a designer and a web developer. I enjoy taking on creative tasks and challenges that allow me to put my skills to the test. As a designer, I love experimenting with different color palettes, typography, and layout designs to create visually appealing and engaging websites and applications.",
	},
];
export const Details = [
	{ name: "Name: ", content: "Rupam Barui" },
	{ name: "Age: ", content: "19+ Years" },
	{ name: "Email: ", content: "rupambarui.17@gmail.com" },
	{ name: "Location: ", content: "Delhi, India" },
];
export const Skills = [
	{ name: "Designing", value: "80%", class: "max-w-[80%] progress_line" },
	{ name: "C, C++", value: "70%", class: "max-w-[70%] progress_line" },
	{ name: "Web Dev", value: "95%", class: "max-w-[95%] progress_line" },
	{ name: "C#", value: "85%", class: "max-w-[85%] progress_line" },
];

// Services section data

export const Services = [
	{
		name: "Web Design",
		icon: "globe-outline",
		text: "Figma",
	},
	{
		name: "Web Dev",
		icon: "logo-react",
		text: "Vanilla, React, Node, Wordpress, Firebase, MongoDB",
	},
	{
		name: "Photography",
		icon: "camera-outline",
		text: "Lightroom, Photoshop, After Effects, Premiere Pro",
	},
	{
		name: "App Dev",
		icon: "phone-portrait-outline",
		text: "Flutter, Swift",
	},
	{
		name: "Language",
		icon: "code-slash-outline",
		text: "C, C#, Python, Java",
	},
	{
		name: "Graphic Design",
		icon: "image-outline",
		text: "Blender, Adobe Illustrator",
	},
];

// Social Icons data

export const Icons = [
	{
		name: "logo-facebook",
		link: "https://www.facebook.com/Rupambarui17",
	},
	{
		name: "logo-twitter",
		link: "https://twitter.com/rupam_barui",
	},
	{
		name: "logo-github",
		link: "https://github.com/Trident09",
	},
	{
		name: "logo-linkedin",
		link: "https://www.linkedin.com/in/rupam-barui-73b415230/",
	},
	{
		name: "logo-instagram",
		link: "https://www.instagram.com/rup.am.i/",
	},
];

// Buttons data

export const AboutBtns = [
	{
		title: "Resume",
		text: "View",
		link: "https://www.canva.com/design/DAFgvPynBRM/NNKFFGYjL6VRQOxIwLmrqg/view?utm_content=DAFgvPynBRM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
		target: "_blank",
		classbtn: "btn text-[skyblue]",
		classp: "after:text-[skyblue]",
	},
	// {
	// 	title: "Know More",
	// 	text: "Visit",
	// 	link: "/about",
	// 	target: "_self",
	// 	classbtn: "btn text-[skyblue]",
	// 	classp: "after:text-[skyblue]",
	// },
];
export const ServiceBtns = [
	// {
	// 	title: "Know More",
	// 	text: "Visit",
	// 	link: "/services",
	// 	target: "_self",
	// 	classbtn: "btn text-blue-900",
	// 	classp: "after:text-blue-900",
	// },
];
export const PortfolioBtns = [
	{
		title: "Know More",
		text: "Visit",
		link: "/portfolio",
		target: "_self",
		classbtn: "btn text-cyan-300",
		classp: "after:text-cyan-300",
	},
];

// Portfolio section data

export const Portfolios = [
	{
		name: "Weather",
		src: "https://raw.githubusercontent.com/Trident09/myportfolio/main/src/Assets/proj-weather.png",
		alt: "Weather Forecast App",
		desc: "Web application in React for weather forecast",
		demo: "https://weather-trident09.vercel.app/",
		source: "https://github.com/Trident09/weather/",
	},
	{
		name: "Con Currency",
		src: "https://raw.githubusercontent.com/Trident09/myportfolio/main/src/Assets/proj-exchange.jpeg",
		alt: "Currency Exchange Rate Calculator",
		desc: "Web app for currency conversion",
		demo: "https://trident09.github.io/currency-converter/",
		source: "https://github.com/Trident09/currency-converter/",
	},
	{
		name: "Calculator",
		src: "https://raw.githubusercontent.com/Trident09/myportfolio/main/src/Assets/proj-calculator.jpeg",
		alt: "Calculator App",
		desc: "this is a basic web app calculator",
		demo: "https://trident09.github.io/Calculator/",
		source: "https://github.com/Trident09/Calculator/",
	},
	{
		name: "Pass Gen",
		src: "https://raw.githubusercontent.com/Trident09/myportfolio/main/src/Assets/proj-passgen.jpeg",
		alt: "PassWord Generator",
		desc: "Random password generator in Javascript",
		demo: "https://trident09.github.io/PassWord-generator/",
		source: "https://github.com/Trident09/PassWord-generator/",
	},
	{
		name: "QR-ify",
		src: "https://raw.githubusercontent.com/Trident09/myportfolio/main/src/Assets/proj-qr.png",
		alt: "QR code Generator",
		desc: "This is a QR code generator which turns links into QR codes",
		demo: "https://trident09.github.io/QR-ify/",
		source: "https://github.com/Trident09/QR-ify/",
	},
	{
		name: "Hangman",
		src: "https://raw.githubusercontent.com/Trident09/myportfolio/main/src/Assets/proj-hangman.jpeg",
		alt: "Hangman Game",
		desc: "game where you guess a word with a given hint",
		demo: "https://trident09.github.io/Hangman/",
		source: "https://github.com/Trident09/Hangman/",
	},
	{
		name: "GDSC NFSU GCP Progress Report",
		src: "https://raw.githubusercontent.com/Trident09/myportfolio/main/src/Assets/proj-gcp-nfsu.png",
		alt: "Progress Report for GDSC NFSU GCP",
		desc: "Website for tracking the progress in Google Cloud Study Jam - 2023",
		demo: "https://nfsu-gcp.vercel.app/",
		source: "https://github.com/Trident09/gcp-progress",
	},
];

export const PesudoFormInputs = [
	{ name: "_captcha", value: "false" },
	{ name: "_subject", value: "New Contact REQUEST submission from Portfolio" },
	{ name: "_next", value: "https://rupam.vercel.app/" },
	{ name: "_autoresponse", value: "I have received your email that you have submitted on my website rupam.vercel.app. I will be sure to reach you as soon as possible. Thanks, Peace." },
	{ name: "_template", value: "table" },
]

export const FormInputs = [
	{
		htmlfor: "name",
		label: "Your Name",
		id: "name",
		type: "text",
		placeholder: "Your Name",
		name: "Name",
	},
	{
		htmlfor: "email",
		label: "Your Email",
		id: "email",
		type: "email",
		placeholder: "Your Email",
		name: "Email",
	},
	{
		htmlfor: "subject",
		label: "Subject",
		id: "subject",
		type: "text",
		placeholder: "Subject",
		name: "Subject",
	},
]