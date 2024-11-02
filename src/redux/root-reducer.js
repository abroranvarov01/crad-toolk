// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import cardCountReducer from "./count-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cardCount: cardCountReducer,
});

export default rootReducer;
