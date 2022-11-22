import React from "react";

import { ButtonPrimary } from "./Button";

function Cards(props) {
	return (
		<div className="container grow flex flex-col justify-between p-4 shadow-lg rounded-lg dark:bg-slate-800 dark:bg-gradient-to-t bg-Pastel-green-2">
			{/* put img inside anchor */}
			<div onClick={props.onNavigate}>
				<img
					className="max-w-full h-auto rounded-md cursor-pointer"
					src={`https://image.tmdb.org/t/p/w500/${props.image}`}
					alt={props.title}
				/>
			</div>
			<p className="text-center dark:text-white font-bold font-nunito text-xl py-2">{props.title}</p>
			<ButtonPrimary
				label="Add to favorite"
				onClick={props.addFavorite}
			/>
		</div>
	);
}

export default Cards;
