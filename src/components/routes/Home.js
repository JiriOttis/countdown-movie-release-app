import React, {useState} from 'react';
import Header from '../Header'
import HomeMain from '../HomeMain'
import Footer from '../Footer'
import MovieCard from "../MovieCard";


const Home = () => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "a69d86428fb8f507454d21335d28c1b7"

    const [movie, setMovie] = useState({});

    return (
        <>
            <Header/>
            {Object.keys(movie).length > 0 ? <MovieCard API_URL={API_URL} API_KEY={API_KEY} movie={movie} /> : <HomeMain API_URL={API_URL} API_KEY={API_KEY} setMovie={setMovie}/>}
            <Footer/>
        </>
    )
}

export default Home