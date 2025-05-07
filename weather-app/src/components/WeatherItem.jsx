import React from 'react'
import { weatherCodes } from '../conditions';

function WeatherItem({ hour, temp, code }) {
    const iconMap = {
        clear: 'clear.svg',
        clouds: 'clouds.svg',
        mist: 'mist.svg',
        rain: 'rain.svg',
        moderate_heavy_rain: 'moderate_rain.svg',
        snow: 'snow.svg',
        thunder: 'thunder.svg',
        thunder_rain: 'thunder_rain.svg'
    };

    let iconFile = 'default.svg'; // fallback icon


    for (const [key, codes] of Object.entries(weatherCodes)) {
        if (codes.includes(code)) {
            iconFile = iconMap[key] || 'default.svg';
            break;
        }
    }

    const url = `/src/assets/icons/${iconFile}`;
    return (
        <>
            <li>
                <p className="hour">{hour}</p>
                <img src={url} alt="" />
                <p className="degree">{temp}</p>
            </li>
        </>
    )
}

export default WeatherItem