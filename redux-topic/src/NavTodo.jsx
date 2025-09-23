import React from 'react'
import { useSelector } from 'react-redux'

const NavTodo = () => {
    const navData = useSelector((state) => state.ajay.list)
  return (
    <div>
      {navData.map((item) => {
        return (
            <div>
                {item.id}
            </div>
        )
      })}
    </div>
  )
}

export default NavTodo
