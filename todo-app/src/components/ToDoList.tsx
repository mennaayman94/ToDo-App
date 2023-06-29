import { List } from "@mui/material";
import { TodoItem } from "./TodoItemComponent";
import { useEffect } from "react";
import axios from "axios";
import React from "react";
import { TodoItemModel } from "../models/TodoItemModel";
import { ConvertToDotoModel } from "../Converters/TodoModelConverter";
import { useAppdispatch, useAppselector } from "../store/hooks/hooks";
import { todoActiosn } from "../store/slices/todoSlice";
import { fetchTodos } from "../store/middlewares/getTodos";

export const ToDoList = () => {
  const dispatch = useAppdispatch();
  const todos = useAppselector((state) => state.todoReducer.todoItems);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <List>
      {todos.length !== 0 &&
        todos.map((item) => {
          return <TodoItem key={item.id} todoItem={item} />;
        })}
    </List>
  );
};
