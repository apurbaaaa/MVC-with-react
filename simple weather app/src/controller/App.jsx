//MVC day-2
import React, { useState } from "react";
import useFetchData from "../model/APIService";
import WeatherCard from "../view/WeatherCard";
import SearchBar from "../view/SearchBar";

export default function App() {
  const [inputText, setInputText] = useState('');
  const [location, setLocation] = useState('');

  const { data: weatherData } = useFetchData(location);


  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLocation(inputText);
    setInputText('');
  }

  return (
    <div>
      <SearchBar inputText={inputText} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      {weatherData && <WeatherCard {...weatherData} />} 
    </div>//the model has sent loading and error states but the components(view) for display the states has not been defined
  );
}
