import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import type { TodoType } from '../type/todoInitialState';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;

    const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState(content);

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))
        setEditable(false)
    }

    return (
        <div className='todos-container'>
            {editable ? <input className='todo-update-input' type='text' value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div>{content}</div>}

            <div>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: "5px" }} />
                {editable ? <FaCheck onClick={handleUpdateTodo} className='icons' /> : <FaRegEdit onClick={() => setEditable(true)} className='icons' />}
            </div>
        </div>
    )
}

export default Todo