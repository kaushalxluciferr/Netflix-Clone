import  React from 'react'
import './Home.css'
import hero_banner from '../../../assets/hero_banner.jpg'
import hero_title from '../../../assets/hero_title.png'
import play_icon from '../../../assets/play_icon.png'
import info_icon from '../../../assets/info_icon.png'
import Titlecard from '../../Titlecards/Titlecard'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} className='banner-img' alt="" />
        <div className="hero-caption">
          <img src={hero_title} className='caption-img' />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur vel enim accusantium voluptatem atque ab autem tempora expedita exercitationem id.</p>
          <div className="hero-btn">
            <button className='btn'> <img src={play_icon}  />Play</button>
            <button className='btn dark-btn'> <img src={info_icon} />More Info</button>
          </div>
          <Titlecard/>
        </div>
      </div>
      <div className="more-cards">
        <Titlecard title={"BlockBuster Movies"} category={"upcoming"}/>
        <Titlecard  title={"Only On Netflix"}  category={"top_rated"}/>
        <Titlecard  title={"Upcoming Movies"} category={"popular"}/>
        <Titlecard  title={"Top Picks For You "} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
} 
export default Home
