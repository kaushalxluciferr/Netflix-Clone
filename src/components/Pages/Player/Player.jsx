import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from "../../../assets/back_arrow_icon.png"
function Player() {

const {id}=useParams();

const navigate=useNavigate();
 
   const [apidata,setapi]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
   })



   const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2RlMjE2MTI4NTdlMjE2OTAzNWEyNjM2MjA4OGZjZSIsIm5iZiI6MTcyOTk0MDU2MS44MDgwNTEsInN1YiI6IjY3MWNjYjg1NDU0MmUzNzFmZTBhYTMyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nr6_tuLMYyx-Sydf9qxzWuGZX8Zh5ox5q3loeyL6q3c'
    }
  };
  console.log(apidata);
  
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?`, options)
    .then(res => res.json())
    .then(res => setapi(res.results[0]))
    .catch(err => console.error(err));
  },[])
 

  return (
    <div className='player'>
      <img onClick={()=>navigate(-2)} src={back_arrow} /> {/* if we click on the <- then it will navigate to the home page  */}
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apidata.key}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apidata.name}</p>
        <p>{apidata.published_at}</p>
        <p>{apidata.typeof} </p>
      </div>
    </div>
  )
}
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'
export default Player
