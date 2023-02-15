import React from 'react'
import {useSelector} from "react-redux";
import MovieDetaliCard from "../component/MovieDetaliCard";

const Movies = () => {
    const {popularMovies} = useSelector(state=>state.movie);
    console.log("popularMovies왔나용", popularMovies)
  return (
    <div>
        {popularMovies.results.map((item)=>(<MovieDetaliCard item={item}/>))}
    </div>
  )
}

export default Movies
