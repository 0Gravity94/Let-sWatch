import { useEffect, useState } from "react";
import "styles/App.css";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/useTitle";
import { useFetchGet } from "utils/hooks/useFetchGet";

import Layout from "components/Layout";

const DetailMovie = (props) => {
	const { id_movie } = props.params;
	const [data] = useFetchGet(`https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=videos`);
	const [videos, setVideos] = useState([]);
	useTitle(data.title);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		data.videos !== undefined && setVideos(data.videos.results);
	}, [data]);

	return (
		<Layout>
			{/* DETAIL start */}
			<div class="animate__animated animate__fadeIn animate_delay-2s">
				<div className="flex flex-wrap justify-center items-center w-full h-full p-5">
					<div className="w-3/4 lg:h-3/4 flex flex-wrap lg:flex-nowrap gap-5 dark:bg-slate-800 bg-Pastel-green-2 border-1 rounded-lg shadow-lg py-3 justify-around">
						<img
							className="w-1/4 h-1/4 object-contain place-self-center rounded-md"
							src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
							alt={props.title}
						/>
						<div className="w-2/4 h-2/4 flex flex-col justify-between">
							<h1 className="text-4xl font-nunito dark:text-white font-bold text-center py-3">{data?.title}</h1>
							<p className="flex items-center dark:text-white text-lg border-b-2 border-Com-Green py-2 font-nunito">Release Date: {data?.release_date}</p>
							<p className="flex items-center dark:text-white xs:text-sm sm:text-md md:text-lg lg:text-lg border-b-2 border-Com-Green py-2 font-nunito">Runtime: {data?.runtime} minutes</p>
							<p className="flex items-center dark:text-white xs:text-sm sm:text-md md:text-lg lg:text-lg border-b-2 border-Com-Green py-2 font-nunito">Language: {data?.original_language}</p>
							<p className="flex items-center dark:text-white xs:text-sm sm:text-md md:text-lg lg:text-lg border-b-2 border-Com-Green py-2 font-nunito">Budget: ${data?.budget}</p>
							<p className="flex items-center dark:text-white xs:text-sm sm:text-md md:text-lg lg:text-lg border-b-2 border-Com-Green py-2 font-nunito">Revenue: ${data?.revenue}</p>
							<p className="text-center dark:text-white text-xl py-4 font-nunito font-light italic">"{data?.tagline}"</p>
						</div>
					</div>
					<h2 className="w-3/4 lg:h-3/4 gap-5 py-3 dark:text-white text-justify text-lg font-nunito font-thin">"{data?.overview}"</h2>
				</div>
				{/* DETAIL end*/}
				{/* VIDEO start */}
				<div className="carousel grid grid-rows-1 justify-center content-center w-full h-full p-5">
					{videos.map((video) => (
						<iframe
							id={video.id}
							width="560"
							height="315"
							src={`https://www.youtube.com/embed/${video.key}`}
							title={video.name}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					))}
				</div>
				{/* VIDEO end */}
			</div>
		</Layout>
	);
};

export default WithRouter(DetailMovie);
