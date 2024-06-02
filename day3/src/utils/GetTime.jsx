import React, { useState, useEffect } from "react";

export function GetTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timerId); 
    }, []);

    return {time}
}


