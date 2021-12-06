import { sortBySize } from '../sizes/utils';

export const UPDATE_RESULTS = 'UPDATE_RESULTS';
export const UPDATE_SNEAKER_DATA = 'UPDATE_SNEAKER_DATA';
export const UPDATE_SNEAKER_SALES_DATA = 'UPDATE_SNEAKER_SALES_DATA';
export const UPDATE_SELECTED_SNEAKER_DATA = 'UPDATE_SELECTED_SNEAKER_DATA';

const SEARCH_URL =
  'https://stockx.com/api/browse?browseVerticals=sneakers&dataType=product&_search=';
const SNEAKER_DATA_URL = 'https://stockx.com/api/products/';
const SNEAKER_DATA_PARAMETERS =
  '/activity?limit=100&page=1&sort=createdAt&order=DESC&state=480&currency=USD&country=PL';

export function updateResults(payload) {
  return {
    type: UPDATE_RESULTS,
    payload
  };
}

export function updateSneakerSalesData(payload) {
  return { type: UPDATE_SNEAKER_SALES_DATA, payload };
}

export function updateSelectedSneakerData(payload) {
  return { type: UPDATE_SELECTED_SNEAKER_DATA, payload };
}

export function updateSneakerData(payload) {
  return { type: UPDATE_SNEAKER_DATA, payload };
}

export function performSearch(keyword) {
  return dispatch => {
    return fetch(SEARCH_URL + keyword)
      .then(response => response.json())
      .then(data => dispatch(updateResults(data.Products)));
  };
}

export function clearSneakerSalesData() {
  return dispatch => {
    dispatch(updateSneakerData({}));
  };
}

export function getSneakerSalesData(sneaker) {
  return dispatch => {
    return fetch(SNEAKER_DATA_URL + sneaker.urlKey + SNEAKER_DATA_PARAMETERS)
      .then(response => response.json())
      .then(data => {
        dispatch(updateSelectedSneakerData(sneaker));
        dispatch(
          updateSneakerSalesData({
            salesData: sortBySize(sneaker.gender, data.ProductActivity)
          })
        );
      });
  };
}
