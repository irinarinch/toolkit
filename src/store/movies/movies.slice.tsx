import { createSlice } from "@reduxjs/toolkit";
import { TMovie } from "../../components/List";
import { fetchMovieById, fetchMovies } from "./movies.actions";

export type TState = {
  isLoading: boolean;
  error: unknown;
  list: TMovie[];
  current?: TMovie;
};

const initialState: TState = {
  isLoading: false,
  error: null,
  list: [],
  current: undefined,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.list = [];
      })
      .addCase(fetchMovies.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.list = actions.payload;
        state.error = null;
        state.current = undefined;
      })
      .addCase(fetchMovies.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
        state.list = [];
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, actions) => {
        state.current = actions.payload;
      })
      .addCase(fetchMovieById.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      });
  },
});
