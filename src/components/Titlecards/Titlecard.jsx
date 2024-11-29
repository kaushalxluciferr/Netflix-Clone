import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'
import Player from '../Pages/Player/Player'


const Titlecard = ({title,category}) => {
const [apidata,setapidata]=useState([])

  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2RlMjE2MTI4NTdlMjE2OTAzNWEyNjM2MjA4OGZjZSIsIm5iZiI6MTcyOTk0MDU2MS44MDgwNTEsInN1YiI6IjY3MWNjYjg1NDU0MmUzNzFmZTBhYTMyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nr6_tuLMYyx-Sydf9qxzWuGZX8Zh5ox5q3loeyL6q3c'
    }
  };
  
//https://developer.themoviedb.org/docs/image-basics
//https://developer.themoviedb.org/reference/movie-now-playing-list
//tmdw is the website from where i have taken th api 

  useEffect(()=>{  //whenever my page reloadss
    
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapidata(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft+=event.deltaY;
  })
  },[]) 
  
  return (
    
    <div className='titlecard'>
      <h2>{title?title:"Trending On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}
export default Titlecard
