import React, { useState } from "react";

function Text({inputText, handleInputChange}){

    return(
        <div>
            <input type="text" value={inputText} onChange={handleInputChange} placeholder="Your thoughts..."/>
        </div>
        
    );
}