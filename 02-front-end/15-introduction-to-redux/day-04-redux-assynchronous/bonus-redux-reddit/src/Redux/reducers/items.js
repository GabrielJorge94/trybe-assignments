import {REQUEST_API, GET_REDDIT} from '../actions';

const INITIAL_STATE = {
  selected: '',
  isFetching: false,
  items: [],
};

function itemsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
      };
    case GET_REDDIT:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    default:
      return state;
  }
}

export default itemsReducer;