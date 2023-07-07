import React from 'react'
import { Link } from "react-router-dom";
import { Youtube, Linkedin, Github } from "react-bootstrap-icons";
import dev from './dev.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Movie = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const fecthAllMovies = async ()=>{
            try{
                const res = await axios.get("https://movie-crud-api.vercel.app/movies")
                setMovies(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fecthAllMovies()
    }, []);

    const handleDelete = async (id)=>{
        try{
            await axios.delete("https://movie-crud-api.vercel.app/movies/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    };

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
        <div className='wel'><h1 className="text-black text-center text-5xl font-bold">Welcome to My Movie Admin Page</h1></div>
        <div className='addnewmovie'><button className='addnew'><Link to="/add" className='text-white'>Add New Movie</Link></button></div>
        
        <div className='movies text-black'>
            {movies.map(movie=>(
                <div className='movie' key={movie.id}>
                    {movie.moviePic && <img className='img1' src={movie.moviePic} alt=''/>}
                    <h2>{movie.movieName}</h2>
                    <h2>{movie.director}</h2>
                    <h2>{movie.budget}</h2>
                    <h2>{movie.imdbrate}</h2>
                    <div className='delup'>
                    <button className='delete' onClick={()=>handleDelete(movie.id)}>Delete</button>
                    <button className='update'><Link to={`/update/${movie.id}`}>Update</Link></button>
                    </div>
                </div>
            ))}
        </div>

    </div>
    </main>
  )
}

export default Movie