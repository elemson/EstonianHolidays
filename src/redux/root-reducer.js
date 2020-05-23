import { combineReducers } from "redux";

import searchEventReducer from "./event/event.reducer";

export default combineReducers({
  search: searchEventReducer,
});
