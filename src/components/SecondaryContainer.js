import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = ()=>{
    const movies=useSelector(store=>store.movies);
    return(
        <div>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/> 
{/* 
MovieList-popular 
movieCard
MovieList-Trending
MovieList-NowPlaying
MovieList-Hrror

*/}
        </div>
    )
}
export default SecondaryContainer;