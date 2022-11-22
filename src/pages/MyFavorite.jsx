import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "styles/App.css";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/useTitle";

import Layout from "components/Layout";
import Cards from "components/CardFavorite";
import { setFavorites } from "utils/redux/reducers/reducer";
import Swal from "sweetalert2";

function MyFavorite(props) {
	const favorites = useSelector((state) => state.data.favorites);
	const dispatch = useDispatch();
	useTitle("My Favorite Movies");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	function handleRemove(movie) {
		let filtered = favorites.filter(({ id }) => {
			return id !== movie.id;
		});
		filtered.join(" - ");
		const newList = JSON.stringify(filtered);
		Swal.fire({
			title: "Are you really going to remove it?",
			text: "You won't be able to revert this you know?",
			imageUrl: "https://chpic.su/_data/stickers/g/Genshin_Impact_Official_Chibi/Genshin_Impact_Official_Chibi_024.webp",
			imageHeight: 200,
			imageAlt: "Albedo asking",
			showCancelButton: true,
			confirmButtonColor: "#6A7BD9",
			cancelButtonColor: "#A67563",
			confirmButtonText: "Yes, I'm sure!",
		}).then((result) => {
			if (result.isConfirmed) {
				localStorage.setItem("favMovies", newList);
				dispatch(setFavorites(filtered));
				localStorage.removeItem(filtered);
				Swal.fire({
					title: "It's gone!",
					text: `${movie.title} has been removed.`,
					imageUrl: "https://pbs.twimg.com/media/FL5PMjmXMAYMSZl.png",
					imageHeight: 200,
					imageAlt: "Yae confirm",
				});
			}
		});
	}

	return (
		<Layout>
			<div class="animate__animated animate__fadeIn animate_delay-2s">
				<p className="text-center font-nunito dark:text-white text-black font-semibold text-md md:text-lg lg:text-6xl pb-8">My Favorite</p>
				<div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-5 mb-5">
					{favorites.map((data) => (
						<Cards
							key={data.id}
							image={data.poster_path}
							title={data.title}
							onNavigate={() => props.navigate(`/detail/${data.id}`)}
							addFavorite={() => handleRemove(data)}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default WithRouter(MyFavorite);
