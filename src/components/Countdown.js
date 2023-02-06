import useCountdown from "../useCountdown";

const Countdown = () => {

    const [countdownDays, countdownHours, countdownMinutes, countdownSeconds, setEndTime] = useCountdown(new Date("February 7, 2023"));

    return <div className="countdown-container">
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
    </div>
};

export default Countdown;