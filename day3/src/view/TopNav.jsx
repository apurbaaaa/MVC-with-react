import React from "react";
import {todaysDate} from '../utils/GetDate'

function TopNav(){

    const { month, date, year, day, hour, minutes } = todaysDate();

    return(
        <div>
            <ul>
                <li>
                <div className="menu-icon">
                    <span class="line">menu</span>
                    <span class="line">menu</span>
                    <span class="line">menu</span>

                </div>
                </li>   
                    <h2>{month}/{date}/{year}</h2>
                    <h3>{day}</h3>
                    <h6>{hour} : {minutes}</h6>
                <li>

                </li>
            </ul>
        </div>
    );
}

export default TopNav;