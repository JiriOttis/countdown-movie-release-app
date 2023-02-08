import UpcomingMovie from "./UpcomingMovie";
import "./styles/UpcomingCard.css"

const UpcomingCard = ({upcomingMovies}) => {

    const renderMovies = () => (
        upcomingMovies.map(movie => (
            <UpcomingMovie
                key={movie.id}
                movie={movie}
            />
        ))
    )


    return (
        <>
            <h1>THE MOST ANTICIPATED MOVIES OF 2023</h1>
            <div className="upcoming-card">
                {renderMovies()}
            </div>
        </>
    )
}

export default UpcomingCard;