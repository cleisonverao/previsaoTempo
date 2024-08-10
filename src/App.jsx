import { useState, useRef } from 'react';
import './App.css';
import axios from 'axios';
import WeatherCity from './components/WeatherInfo/WeatherCity';
import WeatherCity5Days from './components/WeatherInfo5Days/WeatherCity5Days';
/* e011f2cd30cc0f724babecbd2d5d9816 */
function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();

  const inputRef = useRef();

  const handlerSearchCity = async () => {
    const city = inputRef.current.value;
    const key = "e011f2cd30cc0f724babecbd2d5d9816";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5Days = await axios.get(url5Days);
    setWeather5Days(apiInfo5Days.data);
    setWeather(apiInfo.data);

  }
  return (
    <div className='container'>
      <h1>VerãoTeck Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite a cidade' />
      <button onClick={handlerSearchCity}>Buscar</button>

      {WeatherCity && <WeatherCity weather={weather} />}
      {weather5Days && <WeatherCity5Days weather5Days={weather5Days} />}
    </div>
  )
}

export default App
