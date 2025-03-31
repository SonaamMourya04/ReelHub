import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse =()=>{
   useNowPlayingMovies();
    return(
        <div className="text-8xl">
       <Header/>
       <MainContainer/>
       <SecondaryContainer/>
       {/*
       MainContainer
           -VideoBackground
           -VideoTitle
        SecondaryContainer
         -MovieList * n
         -Cards * n


       */}

        </div>
    );
};
export  default  Browse;