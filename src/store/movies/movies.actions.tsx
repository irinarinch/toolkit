import { createAsyncThunk } from "@reduxjs/toolkit";
import { Service } from "../../getData";

export const fetchMovieById = createAsyncThunk(
  "movies/byId",
  async (id: string) => {
    const response = await Service.getData(
      `https://www.omdbapi.com?apikey=64405bd2&i=${id}`
    );

    return response;
  }
);

export const fetchMovies = createAsyncThunk(
  "movies/all",
  async (value: string, { rejectWithValue }) => {
    const response = await Service.getData(
      `https://www.omdbapi.com?apikey=64405bd2&s=${value}`
    );

    if (response.Error) {
      return rejectWithValue(response.Error);
    }

    return response.Search;
  }
);
