import { useEffect } from "react";
import { API_OPTIONS, MOVIE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieList } from "../utils/movieSlice";

const useNowPlaying = () =>{
    const dispatch = useDispatch()
    const movieList = useSelector(state=>state.movie)

    const getMovieList = async ()=>{
        const list = await fetch(MOVIE_URL,API_OPTIONS)
        console.log("loading data 1")
        const jsonResponse = await list?.json()
        console.log("json response ",jsonResponse.results)
        dispatch(addMovieList(jsonResponse.results))
        console.log("loading data 2")
        console.log("movie list ",movieList)
    }

    useEffect(()=>{
     getMovieList()
    
    },[])
}

export default useNowPlaying