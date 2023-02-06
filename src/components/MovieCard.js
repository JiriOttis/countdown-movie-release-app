import "./styles/MovieCard.css"
import Countdown from "./Countdown";

const MovieCard = ({movie}) => {
    console.log(movie);
    const BACKDROP_PATH = "https://image.tmdb.org/t/p/w780"
    const title = movie.title;
    const releaseDate = movie.release_date;
    const genres = movie.genre_ids;
    const description = movie.overview;
    const posterPath = movie.poster_path;

    return <main className='main-movie-card'>
        <div className='countdown-card'>
            <h2 className='countdown-card-heading'>{title}</h2>
            <h4 className='countdown-card-subheading'>releases in</h4>

            <Countdown/>
        </div>
        <div className="movie-card">
            <div className="img-container">
                <img src={`${BACKDROP_PATH}${posterPath}`} alt="poster" width="390"/>
            </div>
            <div className='info-container'>
                <p><strong>Release Date: </strong>{releaseDate}</p> {/*TODO: add different date style*/}
                <p><strong>Genres:</strong> {genres.map((genre) => `${genre}, `)}</p>
                <p><strong>Release Date:</strong> February 17, 2023</p>

                <p className='description'><strong>Description:</strong><br/>
                    {description}
                </p>
            </div>

            <div className='buttons-container'>
                <button className="button-trailer">WATCH TRAILER</button>
                <button className="button-info">GET MORE INFO</button>
            </div>
        </div>
    </main>
};

export default MovieCard;