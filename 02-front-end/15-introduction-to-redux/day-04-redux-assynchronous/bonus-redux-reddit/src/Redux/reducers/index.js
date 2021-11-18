import itemsReducer from "./items";
import selectedReducer from "./selected"
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  itemsReducer, selectedReducer
});

export default rootReducer;