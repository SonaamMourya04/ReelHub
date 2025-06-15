import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
    console.log(movies)
  return (
    <div className="px-4 py-6">
        <h1>{title}</h1>
        <div>
        <MovieCard/>
        </div>    
    </div>
  );
};

export default MovieList;
