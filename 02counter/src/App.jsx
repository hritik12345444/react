import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {


  // ye krne se ek counter name ka initialization ho gya with value 15 and setCounter ki help se ui me ek saath puri jagah pe update krr skte hai counter ki value
  let [counter, setCounter] = useState(15)  // here 15 is default value


  // let counter = 5  abb iska jarurat nahi hai 


  const addValue = () =>{
    counter = counter + 1
    if(counter < 21){
      setCounter(counter);
    }
  }


  const removeValue = ()=>{
    // matlab ki counter variable ki value ek barr me update ho rha hai UI me setCounter ki wajah se
    if(counter > 0){
      setCounter(counter-1)
    }
  }


  // this function make change in ui everywhere where counter variable is triggered
  const doubleNo = () =>{
    counter = counter * 2;
    if(counter < 1000){
      setCounter(counter)
    }
  }

  const halfNo = () =>{
    setCounter(counter/2)
  }


  return (
    <>

      <h1>CHAI AUR REACT WITH HRITIK</h1>
      <h2>counter value : {counter}</h2>    {/*counter ke jagah koi run time value insert krna hai isiliye curley braces me rakhe hai  */}


      {/* jab Add value per click krenege to addValue method run krega */}
      <button onClick={addValue}>  Add value {counter}  </button>  
      <br />
      <br />


      <button 
        onClick={removeValue}
      >Remove value {counter}</button>
      <br />
      <br />

      <button 
      onClick={doubleNo}
      >doubleNo {counter}
      </button>
      <br />
      <br />

      <button
      onClick={halfNo}
      >Half Number {counter}</button>


      <footer > Footer{counter}</footer>

      {/* jab bhi remve value per click krenge to removeValue wala function run krega ye addEventListerner jaissa hai  */}

    </>
  )
}

export default App
