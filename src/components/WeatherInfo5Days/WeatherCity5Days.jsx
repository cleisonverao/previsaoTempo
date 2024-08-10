import './WeatherCity5Days.css';


const WeatherCity5Days = ({ weather5Days }) => {
  console.log(weather5Days);
  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }
  const nextFiveDays = Object.values(dailyForecast).slice(1, 6);
  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' });
    return newDate;
  }
  return (
    <div className='container'>
      <h3>Previsão dos próximos 5 Dias</h3>
      <div className='itemList'>
        {nextFiveDays.map((forecast) => (
          <div key={forecast.dt} className='item'>
            <p className='day'>{convertDate(forecast)}</p>
            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
            <p className='description'>{forecast.weather[0].description}</p>
            <p className='minMax'>{Math.round(forecast.main.temp_min)}ºC <span className='min'>min</span> / {Math.round(forecast.main.temp_max)}ºC <span className='max'>máx</span></p>
          </div>
        ))}
      </div>
      <div className='clearfix'></div>
    </div>
  );
}

export default WeatherCity5Days;