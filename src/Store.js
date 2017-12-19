import { combineReducers, createStore } from 'redux';
import { reducer as homeReducer } from './homePage';

const reducer = combineReducers({
  homeReducer: homeReducer
})

export default createStore(homeReducer);
