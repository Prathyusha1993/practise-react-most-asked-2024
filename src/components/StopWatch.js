import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(5400);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;
        if(isActive){
            interval = setInterval(() => {
                setTime((time) => {
                    if(time > 0){
                        return time - 1;
                    }else {
                        setIsActive(false);
                        return 0;
                    }
                })
            }, 1000);
        }
        return () => {clearInterval(interval)};
    }, [isActive]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) /60);
        const seconds = Math.floor(time % 60);
        return `${hours}: ${minutes}: ${seconds}`;
    }
    
    const handleStart = () => {
        setTime(5400);
        setIsActive(true);
    };

    const handleResumePause = () => {
        setIsActive(prev => !prev);
    };

    const handleStop = () => {
        setIsActive(false)
        setTime(0);
    };

  return (
    <div>
        <h1>StopWatch</h1>
        <h2>{formatTime(time)}</h2>
        <button onClick={handleStart} style={{backgroundColor:'green'}}>Start</button>
        <button onClick={handleResumePause} style={{backgroundColor:'yellow'}}>{isActive ? 'Pause' : 'Resume'}</button>
        <button onClick={handleStop} style={{backgroundColor:'green'}}>Stop</button>
    </div>
  );
}

export default StopWatch;