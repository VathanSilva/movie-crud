import React, { useState } from 'react'
import { NavBar } from './NavBar';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const [movie, setMovie] = useState({
    movieName: "",
    director: "",
    budget: "",
    moviePic: "",
    imdbrate: "",

  });

  const navigate = useNavigate();
  const location = useLocation();

  const movieId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setMovie((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.put("https://movie-crud-api.vercel.app/movies/"+ movieId, movie)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  console.log(movie);
  return (
    <main>
    <div className='navcol'>
    <NavBar/></div>
      <div className='main'>
        <div className='form'>
          <h1 className='text-black'>Update the Movie</h1>
          <input type='text' placeholder='Movie Name' onChange={handleChange} name="movieName" />
          <input type='text' placeholder='Director' onChange={handleChange} name="director" />
          <input type='number' placeholder='budget' onChange={handleChange} name="budget" />
          <input type='text' placeholder='Cast' onChange={handleChange} name="moviePic" />
          <input type='number' placeholder='IMDB Rate' onChange={handleChange} name="imdbrate" />
          <button className='formButtonup' onClick={handleClick}>Update</button>
        </div>
      </div>
    </main>
  )
}

export default Update;