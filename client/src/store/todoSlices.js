import { createSlice } from "@reduxjs/toolkit";
import { getTodo, todoPost } from "./todoActions";

const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  extraReducers: {
    [todoPost.fulfilled]: (state, action) => {
      console.log(action);
    },
    [getTodo.fulfilled]: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export default todoSlice;
