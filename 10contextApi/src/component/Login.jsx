import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext'


const Login = () => {

    const [username, setUsername] = useState("")
    const [pasword, setpasword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,pasword})
    }
    
  return (
    <div>

        <h2>Login</h2>
      
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'   />
        &nbsp;&nbsp;&nbsp;&nbsp;

        <input type="password" 
        value={pasword}
        onChange={(e) => setpasword(e.target.value)}
        placeholder='password'  />
        <br />
        <br />
        <button onClick={handleSubmit} >Submit</button>

    </div>
  )
}

export default Login