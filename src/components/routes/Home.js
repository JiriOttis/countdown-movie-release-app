import React from 'react';
import Header from '../Header'
import HomeMain from '../HomeMain'
import Footer from '../Footer'
import MovieCard from "../MovieCard";


const Home = () => {
    return (
        <>
            <Header/>
            {/*} <HomeMain/> {*/}
             <MovieCard/>
            <Footer/>
        </>
    )
}

export default Home