import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username= "Hritik"   btnText='Click Me'/>
      <Card username={"Shyam"}/>
      <Card />        {/* yeha username, btnText me kuch nahi diye hai to  leking defalut value diye honge to kuch print hoga kyuki app.jsx me defautl value dihe hai */}
      <Card />
    </>
  )
}


export default App
