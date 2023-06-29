import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoItemModel } from "../../models/TodoItemModel";
import { fetchTodos } from "../middlewares/getTodos";

export interface CounterState {
  todoItems: TodoItemModel[];
  title: string;
  description: string;
}

const initialState: CounterState = {
  todoItems: [],
  title: "",
  description: "",
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addNewTodo: (state, { payload }: PayloadAction<TodoItemModel[]>) => {
      state.todoItems = state.todoItems.concat(...payload);
    },
    allTodos:(state, { payload }: PayloadAction<TodoItemModel[]>)=>{
        state.todoItems=payload
    },
    removeTodo: (state, { payload }: PayloadAction<number>) => {
      state.todoItems = state.todoItems.filter((item) => item.id !== payload);
    },
    addEditedToDoitem: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: number;
        editedTodo: any;
      }>
    ) => {
      let todos = state.todoItems.filter((item) => item.id !== payload.id);
      let newTodo: TodoItemModel = {
        id: payload.editedTodo.id,
        Title: payload.editedTodo.Title,
        Description: payload.editedTodo.Description,
        ArchievedAt: payload.editedTodo.ArchiveAt,
        CreatedAt: payload.editedTodo.createdAt,
        FinishedAt: payload.editedTodo.FinishedAt,
        Checked: payload.editedTodo.cheked,
      };
      state.todoItems = todos.concat(newTodo).sort((a,b)=>a.id-b.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchTodos.fulfilled,
      (state, { payload }: PayloadAction<TodoItemModel[]>) => {
        state.todoItems = payload;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const todoActiosn = todoSlice.actions;

export const todoreducer = todoSlice.reducer;
