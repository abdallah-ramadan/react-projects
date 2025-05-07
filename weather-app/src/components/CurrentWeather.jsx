import React from 'react';
import { weatherCodes } from '../conditions'; // Adjust path accordingly

function CurrentWeather({ weather, condition, code, loading, error }) {
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

    if (error) {
        iconFile = 'no-result.svg';
    } else {
        for (const [key, codes] of Object.entries(weatherCodes)) {
            if (codes.includes(code)) {
                iconFile = iconMap[key] || 'default.svg';
                break;
            }
        }
    }

    const url = `/src/assets/icons/${iconFile}`;

    if (loading) {
        return (
            <div className="main-degree loading">
                <div className="spinner"></div>
                <p>Loading weather data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="main-degree error">
                <img src={url} alt="No results" />
                <h2>Unable to fetch weather data.</h2>
                <p>Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="main-degree">
            <img src={url} alt={condition} />
            <h1>{weather} <span>°C</span></h1>
            <p>{condition}</p>
        </div>
    );
}

export default CurrentWeather;
