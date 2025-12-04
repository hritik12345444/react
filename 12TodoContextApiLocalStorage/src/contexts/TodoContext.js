import { useContext, createContext } from "react";

export const todoContext = createContext({
    // values and method
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed : false
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id, todo) =>{},
    deletTodo: (id) =>{},
    toggleComplete: (id) =>{}
})



export const useTodo = () =>{
    return useContext(todoContext)
}


export const TodoProvider = todoContext.Provider

// Agar todoContext me variable and method likh diye hai to todoProvider me ko iss trh se hi define krte hai yeha variable and method nhi define krna hai