import {
  UPDATE_RESULTS,
  UPDATE_SNEAKER_DATA,
  UPDATE_SNEAKER_SALES_DATA,
  UPDATE_SELECTED_SNEAKER_DATA
} from '../actions/search-results-actions';

export default function searchResultsReducer(state = {}, { type, payload }) {
  switch (type) {
    case UPDATE_RESULTS:
      return { ...state, searchResults: payload };
    case UPDATE_SNEAKER_DATA:
      return { ...state, sneakerData: payload };
    case UPDATE_SNEAKER_SALES_DATA:
      return { ...state, sneakerData: { ...state.sneakerData, ...payload } };
    case UPDATE_SELECTED_SNEAKER_DATA:
      return { ...state, sneakerData: { ...state.sneakerData, ...payload } };
    default:
      return state;
  }
}
