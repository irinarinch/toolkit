import { createSlice } from "@reduxjs/toolkit";
import { TMovie } from "../../components/List";

const initialState: TMovie[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const movie: TMovie = action.payload;
      const isExist = state.some((m) => m.imdbID === movie.imdbID);
      if (!isExist) {
        state.push(movie);
      } else {
        const index = state.findIndex((m) => m.imdbID === movie.imdbID);
        state.splice(index, 1);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
