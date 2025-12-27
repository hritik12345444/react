import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <h2 className='text-gray-600 text-xl font-bold'>Learn About Redux Toolkit</h2>
      <AddTodo />
      <Todo />

    </>
  )
}

export default App
