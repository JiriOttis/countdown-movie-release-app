import './styles/SearchCard.css';
import axios from 'axios';
import {useEffect, useState} from "react";

const SearchCard = ({API_URL, API_KEY, setMovie}) => {

    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async (event) => {
        if (event) {
            event.preventDefault()
        }
        if (searchKey !== "") {
            const {data: {results}} = await axios.get(`${API_URL}/search/movie`, {
                params: {
                    api_key: API_KEY,
                    query: searchKey
                }
            })

            setMovie(results[0]);
        }
    }




    return <div className="search-card">
        <h2 className="search-heading">FIND COUNTDOWN TO MOVIE RELEASE</h2>
        <p className="search-subheading">Type in a movie you want to find out how much time is left until its release</p>
        <form onSubmit={fetchMovies}>
            <input type="text" placeholder="Dune: Part Two" onInput={(event) => setSearchKey(event.target.value)}/>
            <button type='submit' className="button-search">SEARCH</button>
        </form>
    </div>
};

export default SearchCard;
