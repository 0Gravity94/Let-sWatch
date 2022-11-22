import React from "react";

function SearchBar() {
	return (
		<div className="flex items-center">
			<div className="flex border border-purple-400 rounded-3xl">
				<input
					type="text"
					className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-3xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
					placeholder="Search..."
				/>
				<button className="px-1 text-black rounded-3xl">
					{" "}
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						class="w-6 h-6 dark:text-white"
					>
						<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default SearchBar;
