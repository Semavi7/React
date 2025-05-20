import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";



function Todo() {
    return (
        <div className='todos-container'>
            <div>Ben ilk todoyum</div>
            <div>
                <IoMdRemoveCircleOutline className='icons' style={{ marginRight: "5px" }} />
                <FaRegEdit className='icons' />
            </div>
        </div>
    )
}

export default Todo