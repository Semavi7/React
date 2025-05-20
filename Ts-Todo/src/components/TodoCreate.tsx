import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { TodoType } from '../type/todoInitialState';
import { createTodo } from '../redux/todoSlice';

function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState("");

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("todo giriniz!")
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999999),
            content: newTodo
        }
        dispatch(createTodo(payload));
        setNewTodo("");
    }

    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} className='todo-input' placeholder='Todo giriniz...' type="text" />
            <button onClick={handleCreateTodo} className='todo-create-button'>Oluştur</button>
        </div>
    )
}

export default TodoCreate