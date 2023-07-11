import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { NavBar } from './NavBar';

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
    <Fragment>
        <div className='navcol'>
    <NavBar/></div>
    <div className='wel'><h1 className="text-black text-center mt-5 text-xl font-bold">Welcome to My Movie Admin Page</h1></div>

    <div>
    <button type="button" center class="button"><Link to="/add" className='text-white no-underline'>Add New Movie</Link></button>
    </div>
    <div class="table-responsive">
    <table class="table">
        <thead className='uppercase'>
            <tr>
                <th className='bg-black text-white'>
                    ID
                </th>
                <th className='bg-black text-white'>
                    Movie Name
                </th>
                <th className='bg-black text-white'>
                    Director
                </th>
                <th className='bg-black text-white'>
                    Budget
                </th>
                <th className='bg-black text-white'>
                    Cast
                </th>
                <th className='bg-black text-white'>
                    IMDB Rate
                </th>
                <th className='bg-black text-white'>
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {movies.map(movie=>(
                <tr key={movie.id}>
                    <td>
                        {movie.id}
                    </td>
                    <td>
                        {movie.movieName}
                    </td>
                    <td>
                        {movie.director}
                    </td>
                    <td>
                        {movie.budget}
                    </td>
                    <td>
                        {movie.moviePic}
                    </td>
                    <td>
                        {movie.imdbrate}
                    </td>
                    <td className='delup'>
                        <button className='delete' onClick={()=>handleDelete(movie.id)}>Delete</button>
                        <button className='update'><Link to={`/update/${movie.id}`}>Update</Link></button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    </Fragment>

  )
}

export default Movie