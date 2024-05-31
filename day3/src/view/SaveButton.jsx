import React from "react";

function SaveButton({handleSubmit}){
    return(
        <div className="save-button">
            <button onClick={handleSubmit}>Save</button>
        </div>
    );
}

export default SaveButton;