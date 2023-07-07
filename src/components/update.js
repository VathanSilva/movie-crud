import React, { useState } from 'react'
import { Youtube, Linkedin, Github } from "react-bootstrap-icons";
import dev from './dev.png';
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
      await axios.put("http://localhost:8206/movies/"+ movieId, movie)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  console.log(movie);
  return (
    <main>
      <div className='main'>
        <span className="bg-black">
          <h1 className='text-20xl md:ml-14 text-white'>Francis Silva</h1>

          <div className="social-icon">
            <a href="https://www.youtube.com/channel/UCzWYas0cWXTT1YFgZQhLUyQ"><Youtube className="youtube" /></a>
            <a href="https://www.linkedin.com/in/vathan-silva/"><Linkedin className="linkedin" /></a>
            <a href="https://github.com/VathanSilva"><Github className="github" /></a>
            <a href="https://francissilva.vercel.app/"><img src={dev} alt="" /></a>
          </div>
        </span>
        <div className='form'>
          <h1 className='text-black'>Update the Movie</h1>
          <input type='text' placeholder='Movie Name' onChange={handleChange} name="movieName" />
          <input type='text' placeholder='Director' onChange={handleChange} name="director" />
          <input type='number' placeholder='budget' onChange={handleChange} name="budget" />
          <input type='text' placeholder='Movie Picture' onChange={handleChange} name="moviePic" />
          <input type='number' placeholder='IMDB Rate' onChange={handleChange} name="imdbrate" />
          <button className='formButtonup' onClick={handleClick}>Update</button>
        </div>
      </div>
    </main>
  )
}

export default Update;