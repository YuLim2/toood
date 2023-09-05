import React, { useContext } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { TodoContext, TodoProvider } from './context/TodoContext';

const App = () => (
    <TodoProvider>
      <h1>My Todo App</h1>
      <TodoInput />
      <TodoList />
    </TodoProvider>
);

export default App;
