import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';

const reducers = combineReducers({
  movie: movieReducer,
  favorites: favoritesReducer,
});

export default reducers;
