import React from 'react'
import "./Css/taskInput.css";

const TaskInput = ({onAdd}) => {
  return (
    <div className='taskInput'>
        <input type="text" placeholder='enter your task' className='input' />
         <br />
        <button className='btn'>ADD</button>
    </div>
  )
}

export default TaskInput