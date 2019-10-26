import uui from 'uuid';

import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from './component/TodoInput';
import TodoItem from './component/TodoItem';
import TodoList from './component/TodoList';
function App() {
  return (
    <div className="App">
    <TodoInput />
    <TodoItem />
    <TodoList />
    </div>
  );
}

export default App;
