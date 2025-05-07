import { useState } from 'react';
import './App.css'
import CurrentWeather from './components/CurrentWeather';
import Search from "./components/Search";
import WeatherItem from './components/WeatherItem';

function App() {
  const [weather, setWeather] = useState("")
  const [condition, setCondition] = useState("")
  const [code, setCode] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hoursDegree, setHoursDegree] = useState([])

  const getWeather = async (url) => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()
      setError(false)
      setWeather(Math.floor(data.current.temp_c))
      setCondition(data.current.condition.text)
      setCode(data.current.condition.code)
      setLoading(false)
      setHoursDegree(data.forecast.forecastday[0].hour)
    } catch (error) {
      setError(true)
      setLoading(false)
      setHoursDegree([])
      console.log(error)
    }
  }


  return (
    <>
      <div className="container">
        <Search getWeather={getWeather} />
        <div className="weather-section">
          <CurrentWeather weather={weather} condition={condition} code={code} error={error} loading={loading} />
          {hoursDegree.length === 0 ? <></> : <div className="hourly-degree">
            <ul>
              {hoursDegree.map((ele) => {
                return <WeatherItem key={ele.time.slice(-5)} code={ele.condition.code} hour={ele.time.slice(-5)} temp={ele.temp_c} />
              })}
            </ul>
          </div>}
        </div>
      </div>
    </>
  )
}

export default App
