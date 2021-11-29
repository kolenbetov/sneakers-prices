import { SET_SNEAKERS_DATA } from '../actions/sneakers-data-actions';

const initialState = { isLoading: false, isFinished: false, sneakersData: {} };

export default function sneakersDataReducers(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case SET_SNEAKERS_DATA:
      return { ...state, sneakersData: payload };
    default:
      return state;
  }
}
