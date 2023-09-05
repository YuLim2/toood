import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
    const { todos, removeTodo, editTodo } = useContext(TodoContext);

    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} onDelete={removeTodo} onEdit={editTodo} />
            ))}
        </ul>
    );
};

export default TodoList;
