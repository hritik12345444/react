// Step: 2

import { createSlice,nanoid } from "@reduxjs/toolkit";
import { act } from "react";
// nanoid is used for generate uinque id

const initialState = {
    todos : [{
        id: nanoid(),
        text: "Hello World",
        completed: false
    }]
}


export const todoSlice = createSlice({
    
    // syntax hi hai name vairable hota hi hai
    name : "todo",  

    // ek initialState bhi hota hai ye btata hai ki statring me value kya rhe hmne isse uper declear krr diya hai 
    initialState,   

    reducers : {     // reducers ke andar property and functions aate hai 


        // function definition  bhi likh skte hai ya funciton ko bahar bhi define krr skte ahi aur yeha referenece de denge
        addTodo: (state, action) =>  {
            const todo = {
                // nanoid() hmesa ek unique id hi dega
                id: nanoid(),
                // action me kuch text(todo) bejehnge use todo ka text me assign krna hai payload ke badh text nhi bhi likh skte hai kyuki variable ka name bhi text hi hai jabb same name hai to .text likhna jaruri nahi hai
                text: action.payload,
                // by defalut completed ka value false hi rhna hoga jbb ispe click kre to true ho
                completed: false

            }

            // state ke through pura pure todos ka access mill jayega fir usme hmm todo ko push krr diye 
            state.todos.push(todo)
        }, 


        // function ko hmesa yehi pe define krna hai ya issii file me contextAPI ke trh khi aur bhi define nahi krr skte hai
        removeTodo: (state, action) => {
            // console.log(action.payload)

            // filter krr rhe hai ki state.todos me whi rakhna hai uska id action.payload.id me match nhi ho jiska match hoga wo by default khud hi remove ho jayega
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            

        },
        
   
        updateTodo: (state, action) => {
            const { id, text } = action.payload;   // yeha do cheez aa rha hai ek id aur ek edited text
            const todo = state.todos.find(todo => todo.id === id);
            
            if (todo) {
                todo.text = text;
            }
        },

        toggleComplete: (state, action)=>{
            const todo = state.todos.find((t) => t.id === action.payload )
            console.log(todo.completed)
            console.log(todo.text)
            todo.completed = !todo.completed
            console.log(todo.completed)
        }
    }

})


// reducers {
//     addTodo : (state,action) =>{} sbb function me ye dono ka access hmesaaa hota hai
                // state me ye btata hai ki abhi iss time pe kya value hai initialState ka jo 
                // action me kuch value aate hai jiska hmme kamm hota hai 
// }


export const {addTodo, removeTodo, updateTodo, toggleComplete} = todoSlice.actions
export default todoSlice.reducer