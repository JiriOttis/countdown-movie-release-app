import "./styles/MovieCard.css"
import Countdown from "./Countdown";
import axios from "axios";
import {useEffect, useState} from "react";
import Youtube from 'react-youtube';
import {MdClose} from 'react-icons/md';

const MovieCard = ({API_URL, API_KEY, movie}) => {
    const BACKDROP_URL = "https://image.tmdb.org/t/p/original"
    const title = movie.title;
    const movieId = movie.id;
    const releaseDate = movie.release_date;
    const genresIds = movie.genre_ids;
    const description = movie.overview;
    const posterPath = movie.poster_path;
    const backdropPath = movie.backdrop_path;

    const [genresNames, setGenresNames] = useState([]);
    const [trailer, setTrailer] = useState(null);
    const [playing, setPlaying] = useState(false);




    useEffect(() => {
       getGenres();
    }, []);

    useEffect(() => {
        fetchMovieTrailer();
    }, []);


    const getGenres = async () => {
            await axios.get(`${API_URL}/genre/movie/list`, {
                    params: {
                        api_key: API_KEY,
                    }
                }).then(response => {
                    const genres = response.data.genres;
                    getGenresNames(genres);
                });
    }

    const getGenresNames = (genres) => {
        let genresNamesArray = [];
        if (genres.length > 0) {
            for (const genreId of genresIds) {
                let obj = genres.find(o => o.id === genreId);
                let name = obj.name;
                genresNamesArray.push(name);
            }
            setGenresNames(genresNamesArray);
        }
    }


    const fetchMovieTrailer = async () => {
        const {data} = await axios.get(`${API_URL}/movie/${movieId}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
            }
        })
        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            setTrailer(trailer ? trailer : data.videos.results[0])
        }
    }



    return <main className='main-movie-card'>
        <div className='countdown-card' style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)) ,url('${BACKDROP_URL}${backdropPath}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <h2 className='countdown-card-heading'>{title}</h2>
            <h4 className='countdown-card-subheading'>releases in</h4>

            <Countdown releaseDate={releaseDate}/>
        </div>
        <div className="movie-card">
            <div className="img-container">
                <img src={`${BACKDROP_URL}${posterPath}`} alt="poster" width="390"/>
            </div>
            <div className='info-container'>
                <p><strong>Release Date: </strong>{releaseDate}</p> {/*TODO: add different date style*/}
                <p><strong>Genres:</strong> {genresNames.map((genre) => `${genre}`).join(', ')}</p>

                <p className='description'><strong>Description:</strong><br/>
                    {description}
                </p>
            </div>
            {playing ?
                <div className='youtube-container'>
                    <MdClose className="close-trailer-icon" size='60px' color='#EBEBF0' onClick={() => setPlaying(false)}/>
                    {trailer ?
                    <Youtube
                        videoId={trailer.key}
                        className={"youtube"}
                        containerClassName={"youtube-container"}
                        opts={
                            {
                                width: '100%',
                                height: '100%',
                                playerVars: {
                                    autoplay: 1,
                                    controls: 0,
                                    cc_load_policy: 0,
                                    fs: 0,
                                    iv_load_policy: 0,
                                    modestbranding: 0,
                                    rel: 0,
                                    showinfo: 0,
                                },
                            }
                        }
                    /> : <h3 className="error-text">Sorry, no trailer was found...</h3>}
                </div>
                : null
               }

            <div className='buttons-container'>
                <button className="button-trailer" onClick={() => setPlaying(true)}>WATCH TRAILER</button>
                <button className="button-info" onClick={() =>  window.location.href=`https://www.themoviedb.org/movie/${movieId}`}>GET MORE INFO</button>
            </div>
        </div>
    </main>
};

export default MovieCard;