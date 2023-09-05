import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => setTodos([...todos, todo]);
    const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
    const editTodo = (editedTodo) => setTodos(todos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo)));

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    );
};