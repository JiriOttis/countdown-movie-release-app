import useCountdown from "../useCountdown";

const Countdown = ({releaseDate, changeDateFormat}) => {

    const today = new Date().getTime();
    const releaseDateAsDate = new Date(releaseDate);
    const [countdownDays, countdownHours, countdownMinutes, countdownSeconds, setEndTime] = useCountdown(releaseDateAsDate);

    const countdown = <>
        <section>
            <p className="countdown-number">{countdownDays}</p>
            <p className="countdown-label">DAYS</p>
        </section>
        <section>
            <p className="countdown-number">{countdownHours}</p>
            <p className="countdown-label">HOURS</p>
        </section>
        <section>
            <p className="countdown-number">{countdownMinutes}</p>
            <p className="countdown-label">MINUTES</p>
        </section>
        <section>
            <p className="countdown-number">{countdownSeconds}</p>
            <p className="countdown-label">SECONDS</p>
        </section>
    </>


    const releasedInfo = <div className='release-info'>
        <p>Movie was released:</p>
        <p>{changeDateFormat(releaseDate)}</p>
    </div>

    return <div className="countdown-container">
        {today < releaseDateAsDate ? countdown : releasedInfo}
    </div>
};

export default Countdown;