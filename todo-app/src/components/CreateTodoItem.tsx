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
import { ConvertToDotoModel } from "../Converters/TodoModelConverter";

type state = {
  title: string;
  description: string;
};
export const CreateTodoItem = () => {
  const state: state = {
    title: "",
    description: "",
  };
  const dispatch = useAppdispatch();
  const [open, setOpen] = React.useState<boolean>(false);
  const [inputState, setInputState] = React.useState<state>(state);
  const handleinputChange = (name: string, input: string) => {
    setInputState((prevState: state) => ({
      ...prevState,
      [name]: input,
    }));
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const createNewTodo = () => {
    axios
      .post("http://localhost:3004/posts", {
        Title: inputState.title,
        Description: inputState.description,
        cheked: false,
        createdAt: new Date().toISOString(),
        FinishedAt: "",
        ArchiveAt: "",
      })
      .then((res) => {
        if (res.data) {
        const data= ConvertToDotoModel([res.data])
          dispatch(todoActiosn.addNewTodo(data));
          setInputState(state);
          handleClose();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Button variant="contained" disableElevation onClick={handleClickOpen}>
        Create To do
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new To do item</DialogTitle>
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
          <Button onClick={createNewTodo}>Create Todo</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
