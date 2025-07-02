const Weather = ({ capital, weather }) => {
    if (!weather) {
        return null;
    }
    console.log('whe',weather.weather);
    
    return (
        <div>
            <h2>Wheater in {capital}</h2>
            <p>Temperature {weather.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <p>Wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather;