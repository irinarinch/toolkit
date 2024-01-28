import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favoritesReducer } from './favorites/favorites.slice';
import { moviesSlice } from './movies/movies.slice';

export type RootState = ReturnType<typeof store.getState>

const reducers = combineReducers({
  movies: moviesSlice.reducer,
  favorites: favoritesReducer,  
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});
