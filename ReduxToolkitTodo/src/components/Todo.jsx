import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, toggleComplete } from '../Features/Todo/TodoSlice'

const Todo = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")
 
  return (
    <>
      <ul className="list-none">
        <button className='font-bold bg-gray-400 mt-2 border-none text-green-900 p-5'>
          Todos Lists
        </button>

        {todos.map((todo) => (
          <li
          
            className="flex items-center justify-between mt-1 bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <input  type='checkbox' className='mr-3' checked={todo.completed} onChange={() => (dispatch(toggleComplete(todo.id))) }   />
            {/* <span 
              // className={todo.completed ? "line-through text-gray-400" : ""}>
            </span> */}

            {editId === todo.id ? (
              <input
                // className="bg-gray-700 text-white px-2 py-1 rounded max-w-[70%]"
                className={todo.completed ? "line-through" : "bg-gray-700 text-white px-2 py-1 rounded max-w-[70%]"}
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span
              //  className="text-white max-w-[70%]"
              className={todo.completed ? "line-through text-gray-400" : "text-white max-w-[70%]"}
               >
                {todo.text}
              </span>
            )}

            {/* yeha if else hi lgga hai but turnary operator kyuki yeha if else work nahi krta hai */}
            {/* if(editId === todo.id){
              <input 
                className="bg-gray-700 text-white px-2 py-1 rounded max-w-[70%]"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            }else{
              <span className="text-white max-w-[70%]">
                {todo.text} 
                </span>
            } */}


            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-3 py-1 bg-blue-500 text-white rounded ml-auto"
            >
              ❌
            </button>

            {editId === todo.id ? (
              <button
                onClick={() => {
                  dispatch(updateTodo({ id: todo.id, text: editText }))
                  setEditId(null)
                  setEditText("")
                }}
                className="px-3 py-1 bg-green-500 text-white rounded ml-4"
              >
                📁
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditId(todo.id)
                  setEditText(todo.text)
                }}
                className="px-3 py-1 bg-red-500 text-white rounded ml-4"
              >
                ✏️
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo