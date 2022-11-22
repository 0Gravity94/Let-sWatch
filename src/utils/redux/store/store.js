import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";

export const store = configureStore({
	reducer: {
		data: reducer.state,
	},
});

/*
Fungsi store yaitu sebuah function/method yang menerima sebuah parameter yang dinamakan reducer. Store ini sendiri digunakan untuk membuat sebuah wadah/tempat yang nantinya dipakai untuk menyimpan sebuah informasi/data/state yang ditempatkan pada hirarki paling atas dari sebuah component tree.

store = temporary (state)
localStorage hanya bisa diakses di browser
cookies bisa diakses dibrowser/server
*/
