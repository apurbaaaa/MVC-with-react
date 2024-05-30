import React from "react";


function SearchBar({ inputText, handleInputChange, handleSubmit }){

    return(
        <div>
            <label>
                Location 
            </label>
            <input type="text" value={inputText} onChange={handleInputChange}/>
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
}

export default SearchBar;