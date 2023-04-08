import React, { useEffect, useState } from 'react';

function Clock() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
    function displayCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const currentTimeString = `${hours}:${minutes}`;

    setCurrentTime(currentTimeString);
    }

    displayCurrentTime();
    const intervalId = setInterval(displayCurrentTime, 1000);

    return () => clearInterval(intervalId);}, []);
    return <span>{currentTime}</span>;
}

export default Clock;