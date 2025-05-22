import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(intervalId);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timer]);

  const startTimer = () => {
    const h = parseInt(hours) || 0;
    const m = parseInt(minutes) || 0;
    const s = parseInt(seconds) || 0;

    // Test case validations
    if (h < 0 || m < 0 || s < 0) {
      alert("Time values cannot be negative.");
      return;
    }
    if (m >= 60 || s >= 60) {
      alert("Minutes and seconds should be less than 60.");
      return;
    }
    if (h === 0 && m === 0 && s === 0) {
      alert("Please enter a non-zero time.");
      return;
    }

    const totalSeconds = h * 3600 + m * 60 + s;
    setTimer(totalSeconds);
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimer(0);
    setHours("");
    setMinutes("");
    setSeconds("");
  };

  const formatTime = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="container">
      <h2>⏳ Countdown Timer</h2>
      <div className="input-row">
        <input
          type="number"
          placeholder="HH"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          disabled={isRunning}
        />
        <input
          type="number"
          placeholder="MM"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          disabled={isRunning}
        />
        <input
          type="number"
          placeholder="SS"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          disabled={isRunning}
        />
      </div>
      <div className="buttons">
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div className="display">
        {timer > 0 ? (
          <h1>{formatTime(timer)}</h1>
        ) : isRunning === false ? (
          <h1></h1>
        ) : null}
      </div>
    </div>
  );
};

export default App;