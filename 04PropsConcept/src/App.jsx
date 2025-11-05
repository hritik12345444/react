import { useState } from 'react'
import './App.css'
import Designcard from './component/design'
function App(){
  return(
    <>
    <Designcard myname='Shubham'/> 
    <Designcard />
    <Designcard myname='Rajendra Prasad'/>
    <Designcard />
    </>
  )
}

export default App