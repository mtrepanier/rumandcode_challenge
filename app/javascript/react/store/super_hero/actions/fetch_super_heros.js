import axios from 'axios';
import { SUPER_HEROS_FETCH_REQUEST, SUPER_HEROS_FETCH_SUCCESS, SUPER_HEROS_FETCH_FAILURE } from '../constants';
function requesting() {
  return { type: SUPER_HEROS_FETCH_REQUEST };
}
function requestSuccess(data) {
  return {
    type: SUPER_HEROS_FETCH_SUCCESS,
    payload: { data: data.data, meta: data.meta }
  };
}
function requestError(error) {
  return {
    type: SUPER_HEROS_FETCH_FAILURE,
    payload: error
  };
}
export default function fetchSuperHeros(args = {}) {
  // Request parameters
  const params = {};
  if (typeof (args['page']) !== 'undefined') {
    params["page"] = args['page']
  }
  if (typeof (args['sort']) !== 'undefined') {
    params["sort"] = args['sort']
  }
  if (typeof (args['sort_dir']) !== 'undefined')   {
    params["sort_dir"] = args['sort_dir']
  }
  if (typeof (args['hero_name']) !== 'undefined')   {
    params["hero_name"] = args['hero_name']
  }
  if (typeof (args['active']) !== 'undefined' && args['active'] === true)   {
    params["active"] = args['active']
  }

  return function (dispatch) {
    dispatch(requesting());
    axios.get(`/api/v1/super_heros.json`, { params })
      .then(response => {
        dispatch(requestSuccess(response.data));
      })
      .catch(error => {
        dispatch(requestError('Oops!! Please try after sometime.'));
      });
  };
}