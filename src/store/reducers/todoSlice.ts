import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../types/types";

interface TodosState {
  todos: ITodo[];
}

const initialState: TodosState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: Date.now() + Math.random(),
        text: action.payload,
        isDone: false,
      });
    },

    updateTodo(state, action: PayloadAction<ITodo>) {
      state.todos.map((todo) =>
        todo.id === action.payload.id ? (todo.text = action.payload.text) : todo
      );
    },

    toggleComplete(state, action: PayloadAction<number>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (toggledTodo) {
        toggledTodo.isDone = !toggledTodo.isDone;
      }
    },

    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
