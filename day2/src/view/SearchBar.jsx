import React from "react";


function SearchBar({ inputText, handleInputChange }){

    return(
        <div>
            <label>
                Location 

            </label>
            <input type="text" value={inputText} onChange={handleInputChange}/>
        </div>
    );
}

export default SearchBar;