import React from "react";

import { ButtonPrimary } from "./Button";

function Cards(props) {
	return (
		<div className="container grow flex flex-col justify-between p-4 shadow-lg rounded-lg dark:bg-slate-800 bg-Pastel-green-2">
			<div onClick={props.onNavigate}>
				<img
					className="max-w-full h-auto rounded-md cursor-pointer"
					src={`https://image.tmdb.org/t/p/w500/${props.image}`}
					alt={props.title}
				/>
			</div>
			<p className="text-center dark:text-white font-bold font-nunito text-2xl py-2">{props.title}</p>
			<ButtonPrimary
				label={`Remove from Favorite`}
				onClick={props.addFavorite}
			/>
		</div>
	);
}

export default Cards;
