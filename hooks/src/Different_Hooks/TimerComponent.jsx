import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Example with setTimeout to update seconds after 1 second
    // const timeoutId = setTimeout(() => {
    //   setSeconds(seconds + 1);
    // }, 1000);

    // Example with setInterval to log seconds every 5 seconds
    const intervalId = setInterval(() => {
        setSeconds(seconds + 1);
      console.log(`Current seconds: ${seconds}`);
    }, 1000);

    // Clean up functions to clear timeout and interval
    return () => {
      clearInterval(intervalId);
    };
  },[seconds]); // useEffect depends on 'seconds' state to update

  return (
    <div>
      <h1>Timer Component</h1>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default TimerComponent;
