import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies); // ✅ changed from movie → movies

  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
      {/* 
        You can extend like this:
        <MovieList title={"Trending"} movies={movies.trending} />
        <MovieList title={"Popular"} movies={movies.popular} />
        <MovieList title={"Horror"} movies={movies.horror} />
      */}
    </div>
  );
};

export default SecondaryContainer;
