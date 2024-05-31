import React from "react";

function NavBar({ isOpen, handleClose }) {
    return (
        <div className={`bg-gray-800 h-screen w-64 fixed top-0 ${isOpen ? 'left-0' : '-left-full'} z-50 transition-transform duration-300 ease-in`}>
            <div className="flex justify-between items-center p-4">
                <div className="text-white font-bold text-lg">Navigation</div>
                {isOpen && (
                    <button onClick={handleClose} className="text-white focus:outline-none">
                        Close
                    </button>
                )}
            </div>
            <ul className="text-white">
                <li className="p-4 hover:bg-gray-700">Item 1</li>
                <li className="p-4 hover:bg-gray-700">Item 2</li>
                <li className="p-4 hover:bg-gray-700">Item 3</li>
                <li className="p-4 hover:bg-gray-700">Item 4</li>
            </ul>
        </div>
    );
}

export default NavBar;
