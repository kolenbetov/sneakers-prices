import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import searchResultsReducer from '../reducers/search-results-reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  searchResultsReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
