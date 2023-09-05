import React, { forwardRef } from 'react';

const TodoItem = forwardRef(({ todo, onDelete, onEdit }, ref) => (
    <li ref={ref}>
        {todo.text}
        <button onClick={() => onDelete(todo.id)}>Delete</button>
        <button onClick={() => onEdit(todo)}>Edit</button>
    </li>
));

export default TodoItem;
