import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TodoContext } from '../context/TodoContext';  // 경로는 실제 TodoContext가 위치한 경로로 수정하세요.

const TodoInput = () => {
    const { register, handleSubmit, reset } = useForm();
    const { onAddTodo } = useContext(TodoContext);

    const onSubmit = (data) => {
        onAddTodo(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="todo" ref={register({ required: true })} />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoInput;
