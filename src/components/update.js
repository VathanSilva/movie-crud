import React, { useState } from 'react'
import { NavBar } from './NavBar';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const [movie, setMovie] = useState({
    movieName: "",
    director: "",
    budget: "",
    cast: "",
    imdbrate: "",
    image:"",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const movieId = location.pathname.split("/")[2]

  const [file, setFile] = useState();

  const handleChange = (e) => {
    setMovie((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    console.log(e.target.files);
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      let fileURL = URL.createObjectURL(file);

      setFile(fileURL);
    }
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
          <input type='text' placeholder='budget' onChange={handleChange} name="budget" />
          <input type='text' placeholder='Cast' onChange={handleChange} name="cast" />
          <input type='text' placeholder='IMDB Rate' onChange={handleChange} name="imdbrate" />
          <input type='file' placeholder='Image' onChange={handleChange} name="image" />
          <img src={file} />
          <button className='formButtonup' onClick={handleClick}>Update</button>
        </div>
      </div>
    </main>
  )
}

export default Update;