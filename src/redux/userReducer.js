// userReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { loadUserState } from "../local-middleware";

const initialState = {
  user: loadUserState() || [],
  count: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        user: [...(state.user || []), action.payload],
        count: state.count + 1,
      };
    },
    deleteUser: (state, action) => {
      return {
        ...state,
        user: state.user.filter((user) => user.id !== action.payload),
      };
    },
    editUser: (state, action) => {
      return {
        ...state,
        user: state.user.map((user) =>
          user.id === action.payload.id
            ? { ...user, ...action.payload.data }
            : user
        ),
      };
    },
  },
});

export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
