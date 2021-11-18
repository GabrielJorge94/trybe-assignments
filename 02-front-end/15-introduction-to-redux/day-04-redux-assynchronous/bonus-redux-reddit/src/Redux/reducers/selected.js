import { CHANGE_SELECTED_SUBREDDIT } from "../actions";

const INITIAL_STATE = {
  selected: ""
};


const selectedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_SUBREDDIT:
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state;
  }
}

export default selectedReducer;