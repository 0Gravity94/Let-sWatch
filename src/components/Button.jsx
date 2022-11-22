import React from "react";

function ButtonPrimary(props) {
	return (
		<div
			className="p-1 border rounded-lg dark:bg-slate-600 bg-green-200 dark:text-white text-black font-nunito text-center font-bold cursor-pointer"
			onClick={props.onClick}
		>
			{props.label}
		</div>
	);
}

function ButtonSecondary(props) {
	return (
		<div
			className="p-5 border rounded-lg dark:bg-slate-600 bg-Pastel-green-3 font-extrabold dark:text-white text-black text-2xl font-indie text-center cursor-pointer"
			onClick={props.onClick}
		>
			{props.label}
		</div>
	);
}
function ButtonTertiary(props) {
	return (
		<div
			className="p-2 font-extrabold dark:text-white text-black text-2xl font-indie text-center cursor-pointer"
			onClick={props.onClick}
		>
			{props.label}
		</div>
	);
}

export { ButtonPrimary, ButtonSecondary, ButtonTertiary };
