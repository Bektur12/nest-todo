import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlices";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
