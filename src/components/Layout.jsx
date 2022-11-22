import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "styles/App.css";

import { WithRouter } from "utils/Navigation";
import { ThemeContext } from "utils/context";
import { ButtonTertiary } from "./Button";

const Layout = ({ children }) => {
	const { isLight, setIsLight } = useContext(ThemeContext);
	return (
		<div>
			<section className="w-full h-screen">
				{/* Navbar Start */}
				<nav className="fixed bg-Pastel-green-1 dark:bg-zinc-900 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 py-1 px-3 justify-between w-full">
					<Link to="/">
						<h1 className="flex justify-start items-center font-indie text-black dark:text-white font-semibold italic hover:not-italic text-md md:text-lg lg:text-3xl hover:text-white pt-1 px-5">Let'sWatch</h1>
					</Link>
					<SearchBar />
					<div className="flex justify-end items-center w-full ">
						<ButtonTertiary
							label={
								isLight ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
										/>
									</svg>
								)
							}
							onClick={() => setIsLight(!isLight)}
						/>
						<Link to="/favorites">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-10 h-10 dark:text-white p-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
								/>
							</svg>
						</Link>
					</div>
				</nav>
				{/* Navbar End */}
				{/* Content Start */}
				<div className="w-full h-max dark:bg-black bg-Pastel-green-4 pt-20">{children}</div>
				{/* Content End */}
				{/* Footer Start */}
				<footer className="bg-Light-Pink-5 p-4 shadow md:px-6 md:py-8 dark:bg-gray-900">
					<div class="sm:flex sm:items-center sm:justify-between">
						<Link to="/">
							<a
								className="font-indie dark:text-white text-black font-semibold italic hover:not-italic text-3xl hover:text-purple-900 px-5"
								href="#"
							>
								Let'sWatch
							</a>
						</Link>
						<ul class="flex flex-wrap items-center mb-6 text-sm text-black sm:mb-0 dark:text-gray-400">
							<li>
								<a
									href="#"
									class="mr-4 hover:underline md:mr-6 "
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									class="mr-4 hover:underline md:mr-6"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									class="mr-4 hover:underline md:mr-6 "
								>
									Licensing
								</a>
							</li>
							<li>
								<a
									href="#"
									class="hover:underline"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<hr class="my-6 border-Pastel-green-1 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<span class="block font-indie text-sm text-black sm:text-center dark:text-gray-400">
						© 2022{" "}
						<a
							href="#"
							class="hover:underline"
						>
							Let'sWatch™
						</a>
						. All Rights Reserved.
					</span>
				</footer>
				{/* Footer End */}
			</section>
		</div>
	);
};

export default Layout;
