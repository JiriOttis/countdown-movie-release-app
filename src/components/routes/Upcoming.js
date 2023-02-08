import Header from '../Header'
import UpcomingCard from '../UpcomingCard'
import Footer from '../Footer'
import axios from "axios";
import {useEffect, useState} from "react";
import moment from 'moment';



const Upcoming = () => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "a69d86428fb8f507454d21335d28c1b7"
    const upcomingMoviesIds = ["677179", "934433", "385687", "569094", "335977", "575264", "346698", "872585", "807172", "693134"];

    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        fetchUpcomingMovies()
    }, [])

    const fetchUpcomingMovies = async () => {
        let upcomingMoviesArray = [];
        for (const movieId of upcomingMoviesIds) {
          await axios.get(`${API_URL}/movie/${movieId}`, {
                params: {
                    api_key: API_KEY
                }
            }).then((response) => {
                upcomingMoviesArray.push(response.data);
            });
        }
        upcomingMoviesArray.sort((a, b) => moment(a.release_date).format('YYYYMMDD') - moment(b.release_date).format('YYYYMMDD'))
        setUpcomingMovies(upcomingMoviesArray);
    };


    return (
        <>
            <Header/>
            <UpcomingCard upcomingMovies={upcomingMovies}/>
            <Footer/>
        </>
    )
}

export default Upcoming;