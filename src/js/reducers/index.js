import { combineReducers } from "redux";

import tweetReducer from "./tweetsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  tweetReducer,
  userReducer
})