
import './App.css'
import Home from './components/pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from '../src/components/Pages/Login/Login'
import { useEffect, useState } from 'react'
import Player from './components/Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
const navigate=useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
if(user){
  console.log("logged In");
  navigate('/')
}
else{
console.log("logged Out");
navigate('/login')

}
    })
  },[])

  return (
   <>
  {/* <Navbar /> */}
  <ToastContainer theme='dark' />
    <Routes>
    <Route path='/' element={<Home/>} />
     <Route path='/login' element={<Login/>} /> 
     <Route path='/player/:id' element={<Player/>}></Route>
     </Routes>
   </>
  )
}

export default App
