// store.js
import { configureStore } from "@reduxjs/toolkit";
import localStorageMiddleware from "../local-middleware";
import { loadUserState, loadCardCountState } from "../local-middleware";
import rootReducer from "./root-reducer";

const preloadedUserState = loadUserState();
const preloadedCardCountState = loadCardCountState();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: {
    user: preloadedUserState,
    cardCount: preloadedCardCountState,
  },
});

export default store;
