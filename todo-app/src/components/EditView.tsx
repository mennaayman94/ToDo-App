import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import axios from "axios";
import { useAppdispatch } from "../store/hooks/hooks";
import { todoActiosn } from "../store/slices/todoSlice";
import { TodoItemModel } from "../models/TodoItemModel";

type state = {
  title: string;
  description: string;
};
type props = {
  todoItem: TodoItemModel;
  open: boolean;
  handleClose: () => void;
};
export const EditTodoItem = (props: props) => {
  const state: state = {
    title: props.todoItem.Title,
    description: props.todoItem.Description,
  };
  const dispatch = useAppdispatch();
  const [inputState, setInputState] = React.useState<state>(state);
  const handleinputChange = (name: string, input: string) => {
    setInputState((prevState: state) => ({
      ...prevState,
      [name]: input,
    }));
  };
  const editNewTodo = () => {
    axios
      .patch(`http://localhost:3004/posts/${props.todoItem.id}`, {
        Title: inputState.title,
        Description: inputState.description,
      })
      .then((res) => {
        if (res.data) {
          dispatch(
            todoActiosn.addEditedToDoitem({
              id: props.todoItem.id,
              editedTodo: res.data,
            })
          );
          setInputState(state);
          props.handleClose();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Edit To do item</DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => {
              handleinputChange(e.target.name, e.target.value);
            }}
            autoFocus
            margin="dense"
            id="title"
            label="To do Title"
            type="text"
            fullWidth
            name="title"
            value={inputState.title}
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              handleinputChange(e.target.name, e.target.value);
            }}
            autoFocus
            margin="dense"
            id="description"
            name="description"
            value={inputState.description}
            label="To do Description"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={editNewTodo}>Edit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
