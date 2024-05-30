import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(location) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {//async and await used because axios getting takes a while 
            const api = '58582bab7d8c113dedcb72a2ba71a6ca';
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api}`);
                if (response.data) {
                    console.log(response.data);
                    const { name, main, dt } = response.data;
                    const temperature = main.temp;
                    const time = new Date(dt * 1000).toLocaleTimeString();//*1000 from seconfs to ms 
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

    return { data, loading, error };//loading and error sent from the Model but not used by the controller
}

export default useFetchData;
