import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducers.js';
import thunkMiddleware from 'redux-thunk';

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextCombineReducers = require('./reducers').default;
    store.replaceReducer(nextCombineReducers);
  });
}

export default store;
