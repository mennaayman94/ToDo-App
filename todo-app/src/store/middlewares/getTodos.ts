import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ConvertToDotoModel } from '../../Converters/TodoModelConverter'


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {

        const res=  await axios.get("http://localhost:3004/posts")
        if(res.status===200 &&res.data ){
          const todos=ConvertToDotoModel(res.data)
          return todos
        }else{
          return []
        } 
   
  
})