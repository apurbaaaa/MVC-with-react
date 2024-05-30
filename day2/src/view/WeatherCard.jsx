import React from "react";
import './styles/WeatherCard.css'


function WeatherCard({place, temperature, time}){
    return(
        <div className="weather-box">
            <h1>{place}</h1>
            <br />
            <h3>{temperature} C</h3>
            <h5>{time}</h5>
        </div>
    );
}

export default WeatherCard;