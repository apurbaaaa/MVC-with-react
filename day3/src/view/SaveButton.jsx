import React from "react";

function SaveButton({ handleSubmit }) {
    return (
        <div className="save-button absolute top-4 right-4">
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
            </button>
        </div>
    );
}

export default SaveButton;
