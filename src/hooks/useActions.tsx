import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as favoritesActions } from '../store/favorites/favorites.slice';
import * as moviesActions from "../store/movies/movies.actions";

const rootActions = {
  ...moviesActions,
  ...favoritesActions,
}

export const useActions = () => {
  const dispatch = useDispatch(); 
  
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}
