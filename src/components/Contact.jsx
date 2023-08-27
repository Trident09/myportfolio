import React from "react";
import "../css/contact-submit.css";
import { Icons } from "../Assets/Menus";
import SocialIcons from "./footer/SocialIcons";

function Contact() {
	return (
		<div className="antialiased bg-cyan-100">
			<div className="flex w-full min-h-screen justify-center items-center">
				<div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
					<div className="flex flex-col space-y-8 justify-between">
						<div>
							<h1 className="font-bold text-4xl tracking-wide">
								Contact Me
							</h1>
							<p className="pt-2 text-cyan-100 text-sm">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Voluptatem, id.
							</p>
						</div>
						<div className="flex flex-col space-y-6">
							<div className="inline-flex space-x-2 items-center">
								<ion-icon
									name="mail"
									className="text-teal-300 text-xl"
								></ion-icon>
								<span>rupambarui.17@gmail.com</span>
							</div>
							<div className="inline-flex space-x-2 items-center">
								<ion-icon
									name="location"
									className="text-teal-300 text-xl"
								></ion-icon>
								<span>Delhi, India</span>
							</div>
						</div>
						<div className="flex items-center justify-start">
							<SocialIcons Icons={Icons} />
						</div>
					</div>
					<div className="relative">
						<div className="absolute z-0 w-40 h-40 bg-teal-300 rounded-full -right-28 -top-32"></div>
						<div className="absolute z-0 w-40 h-40 bg-teal-300 rounded-full -left-28 -bottom-16"></div>
						<div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-100">
							<form
								action="#"
								className="flex flex-col space-y-4"
							>
								<div>
									<label
										htmlFor=""
										className="text-sm"
									>
										Your Name
									</label>
									<input
										type="text"
										placeholder="Your Name"
										className="outline-1 outline-gray-300 w-full rounded-md px-4 py-2 m-2 outline-none focus:outline-2 focus:outline-teal-300"
									/>
								</div>
								<div>
									<label
										htmlFor=""
										className="text-sm"
									>
										Your Email
									</label>
									<input
										type="email"
										placeholder="Email"
										className="outline-1 outline-gray-300 w-full rounded-md px-4 py-2 m-2 outline-none focus:outline-2 focus:outline-teal-300"
									/>
								</div>
								<div>
									<label
										htmlFor=""
										className="text-sm"
									>
										Message
									</label>

									<textarea
										rows="4"
										placeholder="Your Name"
										className="outline-1 outline-gray-300 w-full rounded-md px-4 py-2 m-2 outline-none focus:outline-2 focus:outline-teal-300"
									/>
								</div>
								<button
									className="contact__btn bg-cyan-400 hover:bg-cyan-300 py-1 uppercase"
									type="submit"
								>
									<div className="svg-wrapper-1 hover:bg-cyan-300">
										<div className="svg-wrapper bg-cyan-400 hover:bg-cyan-100">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												width="24"
												height="24"
												className="contact__sub"
											>
												<path
													fill="none"
													d="M0 0h24v24H0z"
												></path>
												<path
													fill="currentColor"
													d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
												></path>
											</svg>
										</div>
									</div>
									<span>Send</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
