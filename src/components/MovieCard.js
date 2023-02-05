import "./styles/MovieCard.css"

const MovieCard = () => {
    return <main className='main-movie-card'>
        <div className='countdown-card'>
            <h2 className='countdown-card-heading'>Ant-Man a Wasp: Quantumania</h2>
            <h4 className='countdown-card-subheading'>releases in</h4>

            <div className='countdown-container'>Countdown</div>
        </div>
        <div className="movie-card">
            <div className="img-container">
                <img src={require('../assets/quantumania-poster.jpeg')} alt="poster" width="455"/>
            </div>
            <div className='info-container'>
                <p><strong>Release Date:</strong> February 17, 2023</p>
                <p><strong>Release Date:</strong> February 17, 2023</p>
                <p><strong>Release Date:</strong> February 17, 2023</p>

                <p><strong>Description:</strong><br/>
                    Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.
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