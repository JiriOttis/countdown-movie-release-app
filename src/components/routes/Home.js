import React, {useState} from 'react';
import Header from '../Header'
import HomeMain from '../HomeMain'
import Footer from '../Footer'
import MovieCard from "../MovieCard";


const Home = () => {

    const [movie, setMovie] = useState({});

    return (
        <>
            <Header/>
            {Object.keys(movie).length > 0 ? <MovieCard movie={movie}/> : <HomeMain setMovie={setMovie}/>}
            <Footer/>
        </>
    )
}

export default Home