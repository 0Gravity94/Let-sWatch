import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "styles/App.css";

import { setFavorites } from "utils/redux/reducers/reducer";
import { WithRouter } from "utils/Navigation";
import Swal from "sweetalert2";
import { useTitle } from "utils/useTitle";

import Layout from "components/Layout";
import Loading from "components/Loading";
import { ButtonSecondary } from "components/Button";
import Cards from "components/CardNow";

function NowPlaying(props) {
	const dispatch = useDispatch();
	const [datas, setDatas] = useState([]);
	const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	useTitle("Now Playing");

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	function fetchData() {
		axios
			.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`)
			.then((res) => {
				const { results } = res.data;
				const newPage = page + 1;
				const temp = [...datas];
				temp.push(...results);
				setDatas(temp);
				setPage(newPage);
			})
			.catch((err) => {
				alert(err.toString());
			})
			.finally(() => {
				setLoading(false);
			});
	}

	function handleFav(movie) {
		const getMovies = localStorage.getItem("favMovies");
		if (getMovies) {
			const parsedMovies = JSON.parse(getMovies);
			const listed = parsedMovies.find((added) => added.id === movie.id);
			if (listed) {
				Swal.fire({
					imageUrl: "https://pbs.twimg.com/media/FOss83vX0Aki6S0.png",
					imageHeight: 200,
					imageAlt: "Surprised Thoma",
					title: "Oh No!",
					text: `${movie.title} is already in your favorite's list`,
					showClass: { popup: "animate__animated animate__bounceIn" },
					hideClass: { popup: "animate__animated animate__bounceOut" },
				});
			} else {
				parsedMovies.push(movie);
				dispatch(setFavorites(parsedMovies));
				const temp = JSON.stringify(parsedMovies);
				localStorage.setItem("favMovies", temp);
				Swal.fire({
					position: "center",
					imageUrl: "https://i.pinimg.com/originals/a1/8b/7c/a18b7c5d9e858e74d612c72aed94e5cc.webp",
					imageHeight: 200,
					imageAlt: "Happy Venti",
					title: `You've added ${movie.title} to Favorite`,
					showConfirmButton: false,
					timer: 3000,
				});
				// alert("added to favorite");
			}
		} else {
			const temp = JSON.stringify([movie]);
			dispatch(setFavorites([movie]));
			localStorage.setItem("favMovies", temp);
		}
	}

	return (
		<Layout>
			<div class="animate__animated animate__fadeIn animate_delay-2s">
				<p className="text-center font-nunito dark:text-white text-black font-semibold text-md md:text-lg lg:text-6xl pb-8">Now Playing in The Theater</p>
				<div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-5 mb-5">
					{loading
						? skeleton.map((item) => <Loading key={item} />)
						: datas.map((data) => (
								<Cards
									key={data.id}
									image={data.poster_path}
									title={data.title}
									onNavigate={() => props.navigate(`/detail/${data.id}`)}
									addFavorite={() => handleFav(data)}
								/>
						  ))}
				</div>
			</div>
			<ButtonSecondary
				label="Show More"
				onClick={() => fetchData()}
			/>
		</Layout>
	);
}

export default WithRouter(NowPlaying);
