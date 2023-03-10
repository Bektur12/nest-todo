import { createAsyncThunk } from "@reduxjs/toolkit";
import { del, get, patch, post, put } from "../api/axiosInstanсe";

export const todoPost = createAsyncThunk(
  "todo/post",
  async (data, { dispatch }) => {
    try {
      await post("/todos", data);
      return dispatch(getTodo());
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const getTodo = createAsyncThunk("todo/get", async () => {
  try {
    const response = await get("/todos");
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
export const patchTodo = createAsyncThunk(
  "todo/patch",
  async (data, { dispatch }) => {
    try {
      await patch(`/todos/${data.id}`, { title: data.title, done: true });
      return dispatch(getTodo());
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const completedTodo = createAsyncThunk(
  "todo/completed",
  async (data, { dispatch }) => {
    console.log(data, "datat");
    try {
      await patch(`/todos/${data.id}`, {
        done: Boolean(data.done),
        title: data.title,
      });
      return dispatch(getTodo());
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const deleteTodo = createAsyncThunk(
  "todo/delete",
  async (id, { dispatch }) => {
    try {
      await del(`/todos/${id}`);
      return dispatch(getTodo());
    } catch (error) {
      throw new Error(error);
    }
  }
);
