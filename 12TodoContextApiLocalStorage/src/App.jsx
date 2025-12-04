import { useEffect, useState } from 'react'
import {todoContext, TodoProvider, useTodo} from './contexts'
import './App.css'
import TodoForm from './component/TodoForm'
import TodoItem from './component/TodoItem'
function App() {

  const [todos, setTodos] = useState([]) // after at all todos are available in this todos

  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
    // setTodos me previouos all todos ka access mill gya aur abb ek unique id set krr diye aur fir todo ke sprade krrke set krr diye 
  }


  const deletTodo = (id) =>{
    setTodos((prev) =>
      prev.filter((oneByOne) =>
        oneByOne.id !== id
      ) 
    )
  }


  const updateTodo =(id,todo)=>{
    setTodos((prev) => 
      prev.map((prevTodo) => 
        (prevTodo.id === id ? todo : prevTodo)))
      // setTodos me pura todos hai uspe map lgaa diye abb ek ek krke sbb todo pe traverse krr rhe hai aur prevTodo.id ko match krr rhe hai iss is se agar id mill gya to uss todo ko replace krr dengeye wala todo ses agar nahi match hua id to prevTodo hi chor denge
  }


  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((oneByOne) =>
        oneByOne.id === id
          ? { ...oneByOne, completed: !oneByOne.completed }
          : oneByOne
      )
    );
  };

  // local storage concept for geting data : deta get krne ke liye shirf hmme key chahiye value nahi yeha hmm local storage se data leke usko JSON me convert kiye hai taki data ka formate na kharab ho
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos")) 
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  // local storage for seting data : data set krne ke liye key and value dono chahiye hote hai jaha pe values string me hona chaiye hmm yeha string me convert krr rhe hai
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  return (
    <TodoProvider value={{addTodo, deletTodo, updateTodo, toggleComplete, todos}}>
      <div className="bg-[#172842] min-h-screen min-w-screen scroll-m-0 py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
            
            
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                {/* <TodoItem todo={todo} /> */}
                <TodoItem todo={todo}/>

                
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App