import React from 'react'
import BusBooking from './BusBooking'
import BookingForm from './BookingForm'
import TodoProcess from './TodoProcess'
import TodoDetails from './TodoDetails'
import NavTodo from './NavTodo'

const App = () => {
  return (
    <div>
      <NavTodo/>
      <TodoProcess/>
      <TodoDetails/>
    </div>
  )
}

export default App
