import React from 'react'
import axios from 'axios'
import {useState} from "react"
function Login() {
const[login,setLogin] = useState({

    email:"",
    password:""
})

    const handleChance =(e) =>{
let  name = e.target.name
let val = e.target.value

setLogin({
    ...login,
    [name]:val
})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:3001/Arr",login)
        .then(res => res.data)
        .then(res => console.log(res))
    }
  return (
    <div className='login'>
      <form onSubmit={(e) => handleSubmit(e)}>
          <label>

<input onChange={(e) =>handleChance(e)} type="text" name="email" placeholder='Email' />

          </label>
          <label>

<input onChange={(e) =>handleChance(e)} type="text" name="password" placeholder='Password' />

          </label>
    <button type="submit" >LOGIN</button>
          </form>



    </div>
  )
}

export default Login
