import React from "react";

function Text({ inputText, handleInputChange }) {
    return (
        <div className="flex justify-center items-start pt-12 pb-[75px] px-[50px] min-h-screen bg-gray-100">
            <div className="bg-white w-full max-w-4xl min-h-[80vh] shadow-md p-8 rounded-lg border border-gray-300 flex">
                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Your thoughts..."
                    className="w-full h-full max-w-4xl min-h-[100vh] px-4 py-2 border-none focus:outline-none text-lg resize-none"
                />
            </div>
        </div>
    );
}

export default Text;
