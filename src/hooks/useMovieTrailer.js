import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlices";
const useMovieTrailer = (movieId)=>{
    const dispatch=useDispatch();
    //fetch trailer video
    const getMovieVideos=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US` ,API_OPTIONS);
        const json= await data.json();
        console.log(json);
        const filterData= json.results.filter(video=>video.type==="Trailer");
        const trailer=filterData.length?filterData[0]:json.results[1];
        console.log(filterData);
        dispatch(addTrailerVideos(trailer))
       
    }; 
    useEffect(()=>{
        getMovieVideos();
    },[]);

}
export default  useMovieTrailer;