// count-reducer.js
import { createSlice } from "@reduxjs/toolkit";
import { loadCardCountState } from "../local-middleware";

const cardCountSlice = createSlice({
  name: "cardCount",
  initialState: loadCardCountState() || 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = cardCountSlice.actions;
export default cardCountSlice.reducer;
