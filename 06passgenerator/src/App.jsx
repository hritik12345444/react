import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  // Password ka jo input hai uska reference le liye hai 
  const passReference = useRef(null)


  // useCallback Hook me ek function leta hai jisse yad rakhna hai aur ek square bracket me  jo bhi iske depedency ko catch me rakhta hai 
  //  usecallback hook me hota hai ki kuch bhi change ho aur method dubara run kre to usko optimise krr do ye hua mtlb
  const PasswordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "1234567890"
    let spacChar = "!@#$%&*+-/_="

    if (numAllowed) {
      str += num
    }
    if (charAllowed) {
      str += spacChar
    }

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(idx)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])



  // useffect me ye hota hai ki jaisse hi kisi depedencies per kuch bhi change ho dubara code run krr do 
  useEffect(() => {
    PasswordGenerator()
  }, [charAllowed, numAllowed, length, PasswordGenerator])


  // ye function jab run hoga tbb pasword me jo bhi hoga jo clipboard me copy ho jayega
  const copyToClipBoard = useCallback(() => {

    passReference.current?.select()  // jab passReference ke through jise bhi selet kiye hai uspe select wala sign aayega
    // passReference.current?.setSelectionRange(1, 4)
    window.navigator.clipboard.writeText(Password)  // password me jo bhi hai usko clipBoard me store krr liye fir badh me ise paste krr skte hai
  }, [Password])


  return (
    <>
      <div className='w-115   h-45 mx-auto shadow-md rounded-lg px-4 my-22 text-white bg-gray-700 my-70 '>
        <h1 className='text-amber-200 text-center font-bold my-4 text-shadow-lg text-lg '>Password Generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4 flex'>

          <input type="text"
            value={Password}
            placeholder="Password"
            readOnly
            className='outline-none w-full py-1 px-3 bg-white rounded-lg my-4 text-black '
            ref={passReference}  // ye reference ke liye hai likhe hai mtlb hmm iska name se kuch kamm krr payenge iss funcion ke bahar
          />

          <button className='text-white mx-1 px-2 rounded-lg cursor-pointer bg-blue-800 font-bold h-11.5  my-2 hover:bg-blue-700 active:scale-95  transition transform duration-150'
            onClick={copyToClipBoard}
          >copy</button>
        </div>
        <div className='flex '>
          <input type="range"
            id="length"
            min={8}
            max={50}
            value={length}
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />

          <label id='length' className='font-bold mx-3' >length : {length}</label>

          <input type="checkbox"
            value={numAllowed}
            id='number'
            onChange={() => setNumAllowed(pre => !pre)}
          />
          <label id='number' className='mx-1 font-bold' > Number</label>


          <input type="checkbox" name="" id=""
            value={charAllowed}
            // isss function me ek previous value hota hai jisee hmm change krr dete hai jbb bhi onchange hota hai
            onChange={() => setCharAllowed(pre => !pre)}

          />
          <label className='mx-1 font-bold'>Character</label>
        </div>


      </div>
    </>
  )
}

export default App
