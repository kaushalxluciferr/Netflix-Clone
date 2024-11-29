import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'

function Navbar(){


  const navref=useRef();

  useEffect(()=>{
window.addEventListener('scroll',()=>{
if(window.scrollY>=50)
{
  navref.current.classList.add('nav-dark')
}
else{
navref.current.classList.remove('nav-dark');
}
})
  },[])

  return (
    <div className='navbar'  >
      <div className="navbar-left">
        <img src={logo}  />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} className='icons' />
        <p>children</p>
        <img src={bell} className='icons'/>
        <div className="navbar-profile">
        <img src={profile} className='profile'/>
        <img src={caret} className='icons'/>
        <div className="dropdown">
          <p onClick={()=>logout()}>Sign out of Netflix</p>
        </div>
        </div>
        </div>
      </div>
  )
}
import './Navbar.css'
import { logout } from '../../firebase'
export default Navbar  
