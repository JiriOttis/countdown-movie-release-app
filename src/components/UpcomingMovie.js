import Countdown from "./Countdown";
import {changeDateFormat} from "../utils";

const UpcomingMovie = ({movie}) => {
    const BACKDROP_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div className="upcoming-movie-container" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)) ,url('${BACKDROP_URL}${movie.backdrop_path}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <h3 className="upcoming-movie-title">{movie.original_title}</h3>
            <div className="countdown-card" id="upcoming-countdown-card"  >
                <Countdown releaseDate={movie.release_date} changeDateFormat={changeDateFormat}/>
            </div>
        </div>
    )
}

export default UpcomingMovie;