import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as homeReducer, middleware as homeMiddleware } from './homePage';

const win = window;

const reducer = combineReducers({
  homeReducer: homeReducer
})

const storeEnhancers = compose(
  applyMiddleware(homeMiddleware),
  (win && win.devToolsExtension) ? win.devToolsExtension() : f => f
);

const store = createStore(reducer, storeEnhancers);

export default store;
