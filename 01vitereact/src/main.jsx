import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import App from './App.jsx'
import ReactDom from 'react-dom/clint'
import React  from 'react'

function myApp(){
  return (
    <div>
      <h1>Custom App | Hritik</h1>
    </div>
  )
}


// const reactElement ={
//   type: 'a',
//   props: {
//     href:'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }


const anotherElement =(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Chai aur react"


const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit Google',
  anotherElement

)

ReactDom.createElement(document.getElementById('root')).render(

  reactElement

)