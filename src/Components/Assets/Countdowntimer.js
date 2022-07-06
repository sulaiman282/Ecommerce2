import React from 'react'
import countdowntimer from "../Assets/countdowntimer.css";
import { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from "./Countdownutils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};
const Countdowntimer = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        updateRemainingTime(countdownTimestampMs);
      }, 1000);
      return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);
  
    function updateRemainingTime(countdown) {
      setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }
  
    return (
      <div className="countdown-timer d-flex justify-content-right">
        <span>{remainingTime.days}</span>
        <span className='pe-2'>d</span>
        <span className="two-numbers">{remainingTime.hours}</span>
        <span className='pe-2'>h </span>
        <span className="two-numbers">{remainingTime.minutes}</span>
        <span className='pe-2'>m </span>
        <span className="two-numbers">{remainingTime.seconds}</span>
        <span className='pe-2'>s </span>
      </div>
    );
  };
  
  export default Countdowntimer;