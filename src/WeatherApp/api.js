export const fetchWeather = async (
    city,
    setWeather,
    setError,
    setLoading,
    setShowWeatherDetails,
    units
) => {
    const API_KEY = "ae9b76ba2ccf3f731ead5b79e1a0cd73";
    setLoading(true);
    setShowWeatherDetails(false);
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`
        );
        if (response.status === 404) {
            setError("City not found");
        } else {
            setError(null);
            const data = await response.json();
            setWeather(data);
            setShowWeatherDetails(true);
            if (units === "metric"){
                for (let i = 0; i < 8; i++){
                    data.list[i].main.temp = `${Math.round(data.list[i].main.temp)}°C`
                }
                data.list[0].main.feels_like = `${Math.round(data.list[0].main.feels_like)}°C`
                data.list[0].wind.speed = `${Math.round(data.list[0].wind.speed/1000/0.00028)} km/h`;
                data.list[0].wind.gust = `${Math.round(data.list[0].wind.gust/1000/0.00028)} km/h`;
            } else{
                for (let i = 0; i < 8; i++){
                    data.list[i].main.temp = `${Math.round(data.list[i].main.temp)}°F`;
                }
                data.list[0].main.feels_like = `${Math.round(data.list[0].main.feels_like)}°F`;
                data.list[0].wind.speed = `${Math.round(data.list[0].wind.speed)} mph`;
                data.list[0].wind.gust = `${Math.round(data.list[0].wind.gust)} mph`;
            } 
        }
    } catch (error) {
        setError("Failed to fetch weather data");
    } finally {
        setLoading(false);
    }
};
