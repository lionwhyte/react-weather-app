const HourlyWeatherForecast = ({ weather, fadein }) => {
    const elements = [];

    for (let i = 0; i < 8; i++) {
        elements.push(
            <div
                key={i}
                className="mx-2 inline-block p-3 rounded-lg bg-blue-400/50"
            >
                <h3>{weather.list[i].dt_txt.split(" ")[1].slice(0, 5)}</h3>
                <h3>{weather.list[i].dt_txt.split(" ")[0]}</h3>
                <img
                    src={`https://openweathermap.org/img/wn/${weather.list[i].weather[0].icon}@2x.png`}
                    alt="Weather icon"
                    className="mx-auto w-24 mt-[-12px]"
                />
                <h3 className="text-2xl mt-[-20px] mb-1">
                    {weather.list[i].main.temp}
                </h3>
                <h3>{weather.list[i].weather[0].description}</h3>
            </div>
        );
    }

    return (
        <div
            className={`w-full sm:max-w-2xl md:max-w-3xl lg:max-w-7xl my-4 mx-auto ${fadein}`}
        >
           
            <div className="my-4 bg-blue-300/50 p-5 rounded-lg overflow-x-auto whitespace-nowrap text-center">
                {elements}
            </div>
        </div>
    );
};

export default HourlyWeatherForecast;
