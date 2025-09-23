import React from 'react';
import { useSelector } from 'react-redux';

const TodoDetails = () => {
    const todoData = useSelector((state) => state.ajay.list)
  return (
    <div>
      {todoData.map((item) => {
        return (
            <div>
                {item.text}
            </div>
        )
      })}
    </div>
  )
}

export default TodoDetails
