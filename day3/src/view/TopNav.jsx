import React from "react";
import { todaysDate } from '../utils/GetDate';

function TopNav({ handleMenuButton, isMenuOpen }) {
    const { month, date, year, day, hour, minutes } = todaysDate();

    return (
        <div className="bg-gray-800 p-4 shadow-lg relative">
            <ul className="flex items-center justify-between text-white">
                <li>
                    <div className="menu-icon cursor-pointer" onClick={handleMenuButton} style={{ marginRight: isMenuOpen ? 'calc(64px - 2rem)' : 0 }}>
                        <span className="block h-0.5 w-8 bg-white mb-1"></span>
                        <span className="block h-0.5 w-8 bg-white mb-1"></span>
                        <span className="block h-0.5 w-8 bg-white"></span>
                    </div>
                </li>
                <li className="flex-grow">
                    <div className="text-center">
                        <h2 className="text-xl">{month}/{date}/{year}</h2>
                        <h3 className="text-lg">{day}</h3>
                        <h6 className="text-sm">{hour}:{minutes}</h6>
                    </div>
                </li>
                <li></li> {/* This empty li is for spacing */}
            </ul>
            {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={handleMenuButton}></div>
            )}
        </div>
    );
}

export default TopNav;
