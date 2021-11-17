import itemsReducer from "./items";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  items: itemsReducer,
});

export default rootReducer;