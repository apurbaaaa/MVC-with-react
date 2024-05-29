import React from "react";
import SearchBar from "../view/SearchBar"
import { useState } from "react";

export default function App(){
    const [inputText, setInputText] = useState('');

    function handleInputChange(event){
        setInputText(event.target.value);
    }


    return(
        <SearchBar inputText={inputText}
        handleInputChange = {handleInputChange}
        />
    );
}