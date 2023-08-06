import React, { useState } from 'react'
import { NavBar } from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Add = () => {
  const [movie, setMovie] = useState({
    movieName:"",
    director:"",
    budget:"",
    cast:"",
    imdbrate:"",
    image:"",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMovie((prev) => ({...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("https://movie-crud-api.vercel.app/movies", movie)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  console.log(movie);
  return (
    <main>
    <div className='navcol'>
    <NavBar/></div>
      <div>
        <div className='form'>
          <h1 className='text-black'>Add New Movie</h1>
          <input type='text' placeholder='Movie Name' onChange={handleChange} name="movieName"/>
          <input type='text' placeholder='Director' onChange={handleChange} name="director" />
          <input type='text' placeholder='budget' onChange={handleChange} name="budget" />
          <input type='text' placeholder='Cast' onChange={handleChange} name="cast" />
          <input type='text' placeholder='IMDB Rate' onChange={handleChange} name="imdbrate" />
          <input type='image' placeholder='Image' onChange={handleChange} name="image" />
          <button className='formButtonadd' onClick={handleClick}>Add</button>
        </div>
      </div>
    </main>
  )
}

export default Add;