import { combineReducers } from 'redux';

import {
  PING,
  FETCH_ARTIST_DATA,
  FETCH_ARTIST_DATA_FAIL
  // ....
} from '../actions';


export const artistDataReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTIST_DATA:
      return {
        ...state
        // [action.payload.test]: action.payload
      }
    case FETCH_ARTIST_DATA_FAIL:
      return {};
    default:
      return state
  }
}

export const pingpong = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };
    case 'PONG':
      return { isPinging: false };
    default:
      return state;
  }
};
export default combineReducers({
  artistDataReducer,
  pingpong
});
