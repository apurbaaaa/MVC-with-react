import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(location) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
                if (response.data) {
                    console.log(response.data);
                    const { name, main, dt } = response.data;
                    const temperature = main.temp;
                    const time = new Date(dt * 1000).toLocaleTimeString(); // Convert from seconds to milliseconds
                    setData({ place: name, temperature, time });
                } else {
                    setError('No data received from the server.');
                }
            } catch (err) {
                setError('Failed to fetch weather data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        if (location) {
            fetchData();
        }
    }, [location]);

    return { data, loading, error };
}

export default useFetchData;
