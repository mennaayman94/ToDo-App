import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { Button } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { CreateTodoItem } from './components/CreateTodoItem';
import ShowWeather from './components/ShowWeather';

function App() {
  return (
    <div >
      <ShowWeather/>
<CreateTodoItem/>
    <ToDoList/>
    </div>
  );
}

export default App;
