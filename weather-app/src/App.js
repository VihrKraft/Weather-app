import logo from './logo.svg';
import './index.css';
import { CityComponent } from './components/CityComponent';
import { useState } from 'react';
import { WeatherComponent } from './components/WeatherComponent';

function App() {
  let [city, setCity] = useState("");

  let [weather, setWeather] = useState();

  console.log(`Город: ${city}, Погода: ${weather}`)

  const fetchWeather = async (event) => {
    event.preventDefault() 
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
    let data = await response.json();
    setWeather(data)
  }

  return (
    <div className="App">
      <div className='Container'>
        <span className='AppLabel'>React Weather App</span>
        {
        city && weather ?
          <WeatherComponent weather={weather}/>
        :
          <CityComponent setCity={setCity} fetchWeather={fetchWeather}/>
        }
      </div>
    </div>
  );
}

export default App;
