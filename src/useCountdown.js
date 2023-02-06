import {useState, useEffect} from "react";

export default function useCountdown(endTime) {
    const [end, setEndTime] = useState(endTime);
    const [countdownDays, setCountdownDays] = useState();
    const [countdownHours, setCountdownHours] = useState();
    const [countdownMinutes, setCountdownMinutes] = useState();
    const [countdownSeconds, setCountdownSeconds] = useState();

    useEffect(() => {

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = end - now;

            const days = Math.floor(distance/(24*60*60*1000));
            const hours = Math.floor(distance % (24*60*60*1000) / (1000*60*60));
            const minutes = Math.floor(distance % (60*60*1000) / (1000*60));
            const seconds = Math.floor(distance % (60*1000) / 1000);

            if (distance < 0) {
                //Stop timer
                clearInterval(interval.current);
            }else {
                setCountdownDays(days);
                setCountdownHours(hours);
                setCountdownMinutes(minutes);
                setCountdownSeconds(seconds);
            }
        })
    })
    return [countdownDays, countdownHours, countdownMinutes, countdownSeconds, setEndTime];
}