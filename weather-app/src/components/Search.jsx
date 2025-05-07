import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { MdMyLocation } from 'react-icons/md'

function Search({ getWeather }) {
    const API_KEY = import.meta.env.VITE_API_KEY
    const [input, setInput] = useState("egypt")

    const handleSubmit = (e) => {
        e.preventDefault()


        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${input}&days=2`
        getWeather(API_URL)
    }

    useEffect(() => {
        getWeather(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=egypt&days=2`)
    }, [])
    return (
        <div className="search-section">
            <form onSubmit={handleSubmit}>
                <FiSearch className="search-icon" />
                <input type="search" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter a city name' required />
                <button><MdMyLocation /></button>
            </form>
        </div>
    )
}

export default Search