import React, { useState } from 'react'
import './Login.css'
import logo from "../../../assets/logo.png"
import { login,signup } from '../../../firebase'
import loadd from "../../../assets/netflix_spinner.gif"

function Login() {
  const [mode,setmode]=useState("signin")
const [loading,setload]=useState(false)
const [name,setname]=useState("")
const [email,setemail]=useState("")
const[pass,setpass]=useState("")


const user_auth=async (event)=>{
  try{
  event.preventDefault();  //not reload teh page when we submit the record
setload(true)
  if(mode==="signin")
  {  
    await signup(name,email,pass)
  }
  else{
    await login(email,pass);
  }
  setload(false)
}
catch(error)
{
  console.log(error);
  
}
}

  return (
    <>
    {loading? <div className="login-spinner">
      <img src={loadd} alt="" />
    </div> :
    <div className='login'>
<img src={logo}  className='login-logo' />      
<div className="login-form">
  <h1>{mode=="signin"?"Sign In":"Login"}</h1>
  <form >
  {mode=="signin"?<input value={name} onChange={(e)=>setname(e.target.value)}  type="text" placeholder='Enter Your Name' id="" />:null}

<input value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder='Email' id="" />
<input value={pass} onChange={(e)=>setpass(e.target.value)} type="password" placeholder='Enter Your pass' id="" />
<button onClick={user_auth} type='submit'>{mode=="signin"?"Sign In":"Login"}</button>
<div className="form-help">
  <div className="remember">
  <input type="checkbox"  />
  <label htmlFor="">Remember Me</label>
  </div>
  <p>Need Help?</p>
</div>
  </form>
  <div className='kaushal'>
  <p>{mode=="signin"? <p>Already Have account ? <span onClick={()=>setmode("login")}> Login in Now</span></p>:<p> Create A new Account? <span onClick={()=>setmode("signin")}> Sign in Now </span></p> }</p>
  </div>
</div>
    </div>
}
    </>
  )
}
import './Login.css'
export default Login
