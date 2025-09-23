import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/todoSlice';

const TodoProcess = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState();
    const taskHandler = () => {
        dispatch(addTodo(task))
        console.log("task", task);
        
    }
    
  return (
    <div>
      <h2>Add Todo: </h2>
      <input type='text' value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={taskHandler}>Submit</button>
    </div>
  )
}

export default TodoProcess
