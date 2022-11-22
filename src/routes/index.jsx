import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import NowPlaying from "../pages/NowPlaying";
import Detail from "../pages/DetailMovies";
import MyFavorite from "../pages/MyFavorite";

import { ThemeContext } from "utils/context";
import { setFavorites } from "utils/redux/reducers/reducer";

function App() {
	const dispatch = useDispatch();
	const [isLight, setIsLight] = useState(true);
	const theme = useMemo(() => ({ isLight, setIsLight }), [isLight]);

	useEffect(() => {
		if (isLight) {
			document.documentElement.classList.remove("dark");
		} else {
			document.documentElement.classList.add("dark");
		}
	}, [isLight]);

	//ambil data film
	useEffect(() => {
		const getMovies = localStorage.getItem("favMovies");
		if (getMovies) {
			dispatch(setFavorites(JSON.parse(getMovies)));
		}
	}, []);

	return (
		<ThemeContext.Provider value={theme}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<NowPlaying />}
					/>
					<Route
						path="/detail/:id_movie"
						element={<Detail />}
					/>
					<Route
						path="/favorites"
						element={<MyFavorite />}
					/>
					<Route
						path="*"
						element={<div>404 Error Not Found</div>}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
}

export default App;
