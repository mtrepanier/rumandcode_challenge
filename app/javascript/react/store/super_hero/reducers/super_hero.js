import { SUPER_HEROS_FETCH_REQUEST, SUPER_HEROS_FETCH_SUCCESS, SUPER_HEROS_FETCH_FAILURE } from '../constants';
const INITIAL_STATE = { all: [], meta: null, isFetching: false, isError: false, errorMessage: null };
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUPER_HEROS_FETCH_REQUEST:
      return { ...state, isFetching: true, isError: false, errorMessage: null };
    case SUPER_HEROS_FETCH_SUCCESS:
      return { ...state, isFetching: false, isError: false, all: action.payload.data, meta: action.payload.meta };
    case SUPER_HEROS_FETCH_FAILURE:
      return { ...state, isFetching: false, isError: true, errorMessage: action.payload };
    default:
      return state;
  }
}