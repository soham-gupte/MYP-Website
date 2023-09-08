import React, { useEffect, useRef, useState } from "react";
import "./CountdownStyles.css"

export function Countdown() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('September 11, 2023 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            }
            else {
                // update timer
                const days = Math.floor(distance / (1000 * 3600 * 24));
                const hours = Math.floor((distance % (1000 * 3600 * 24) / (1000 * 3600)));
                const minutes = Math.floor((distance % (1000 * 3600)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    })

    return (
        <section className="timer-container">
            <section className="timer">
                <div>
                    <h2>Get ready for the upcoming elections!</h2>
                </div>
                <div>
                    <section className="countdown-sec">
                        <p>{timerDays}</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section className="countdown-sec">
                        <p>{timerHours}</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>
                    <section className="countdown-sec">
                        <p>{timerMinutes}</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section className="countdown-sec">
                        <p>{timerSeconds}</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </section>
        </section>
    )
}