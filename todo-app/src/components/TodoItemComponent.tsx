import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import EditIcon from "@mui/icons-material/Edit";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodoItemModel } from "../models/TodoItemModel";
import axios from "axios";
import AlertDialog from "./AlertDialoge";
import { useAppdispatch, useAppselector } from "../store/hooks/hooks";
import PreviewIcon from '@mui/icons-material/Preview';
import { todoActiosn } from "./../store/slices/todoSlice";
import ViewDialoge from "./ViewItemDialoge";
import { EditTodoItem } from "./EditView";
type TodoItemProps = {
  todoItem: TodoItemModel;
};
export const TodoItem = (props: TodoItemProps) => {
  const [checked, setChecked] = React.useState<TodoItemModel[]>([]);
  const [openDeletDialoge, setOpen] = React.useState<boolean>(false);
  const [openViewDialoge, setOpenViewDialoge]=React.useState<boolean>(false);
  const [openEditDialoge, setOpenEditDialoge]=React.useState<boolean>(false);
  const todos = useAppselector((state) => state.todoReducer.todoItems);

  const dispatch = useAppdispatch();
  const handleToggle = (value: number) => () => {
    console.log(value)
 const checkedTodo=todos.map((item:any)=>{
  if(item.id===value){
    return{
      ...item,
      checked:!item.checked
    }
  }else{
return {
  ...item
}
  }
  
 })
 //dispatch(todoActiosn.allTodos(checkedTodo))
 setChecked(checkedTodo)
  };

  const deleteItem = () => {
    axios
      .delete(`http://localhost:3004/posts/${props.todoItem.id}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(todoActiosn.removeTodo(props.todoItem.id));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const labelId = `checkbox-list-label-${props.todoItem.id}`;
  return (
    <>
      <ListItem
        key={props.todoItem.id}
        secondaryAction={
          <>
           <IconButton onClick={()=>{
            setOpenViewDialoge(true)
           }} edge="end" aria-label="comments">
              <PreviewIcon  />
            </IconButton>
            <IconButton  onClick={()=>setOpenEditDialoge(true)} edge="end" aria-label="comments">
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => setOpen(true)}
              edge="end"
              aria-label="comments"
            >
              <DeleteIcon />
            </IconButton>
           
           
          </>
        }
        disablePadding
      >
        <ListItemButton role={undefined} onClick={handleToggle(props.todoItem.id)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={false}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": labelId }}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={props.todoItem.Title} />
        </ListItemButton>
      </ListItem>
      {openDeletDialoge && (
        <AlertDialog deleteItem={deleteItem} open={openDeletDialoge} />
      )}
      {
        openViewDialoge&&<ViewDialoge handleClose={()=>setOpenViewDialoge(false)} item={props.todoItem} open={openViewDialoge}/>
      }
      {
        openEditDialoge&&<EditTodoItem handleClose={()=>setOpenEditDialoge(false)}  todoItem={props.todoItem} open={openEditDialoge}/>
      }
    </>
  );
};
