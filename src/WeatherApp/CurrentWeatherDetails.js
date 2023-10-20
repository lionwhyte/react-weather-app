import arrow from "./assets/arrow.svg";
import temperature from "./assets/temperature.png";
import humidity from "./assets/humidity.png";
import wind from "./assets/wind.png";
import pressure from "./assets/pressure.png";
import clouds from "./assets/clouds.png";
import visibility from "./assets/visibility.png";
import sunrise from "./assets/sunrise.png";
import sunset from "./assets/sunset.png";
import timezone from "./assets/timezone.png";

const CurrentWeatherDetails = ({ weather, fadein, units }) => {
    return (
        <div
            className={`container my-4 mx-auto bg-blue-300/50 rounded-lg ${fadein} flex justify-between flex-col sm:flex-row`}
        >
            <div className="w-full sm:w-96 bg-blue-400/50 p-4 rounded-lg">
                <h2 className="text-3xl">
                    {weather.city.name}, {weather.city.country}
                </h2>
                <p className="mb-[-2rem] text-xl">
                    {new Date(weather.list[0].dt * 1000).toLocaleDateString([], { weekday: "long" })},{" "}
                    {new Date(weather.list[0].dt * 1000).getDate()}{" "}
                    {new Date(weather.list[0].dt * 1000).toLocaleDateString([], { month: "short" })}
                </p>
                <div className="flex justify-center flex-col">
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
                        alt="Weather icon"
                        className="mx-auto w-56"
                    />
                    <h2 className="self-center text-5xl mt-[-2.5rem] mb-4">
                        {weather.list[0].main.temp}
                    </h2>
                </div>
                <p className="text-xl text-center">{weather.list[0].weather[0].description}</p>
            </div>
            <div className="w-full sm:w-96 p-4 rounded-lg text-xl">
                <p className="flex justify-between border-b-2 border-dotted mb-2">
                    <span><img src={temperature} alt="temperature_icon" className="w-7 inline mb-1" />Feels like</span>
                    <span>{weather.list[0].main.feels_like}</span>
                </p>
                <p className="flex justify-between border-b-2 border-dotted my-2">
                    <span><img src={wind} alt="wind_icon" className="w-7 inline mb-1" />Wind</span>
                    <span>
                        <img
                            src={arrow}
                            alt="arrow"
                            style={{
                                rotate: `${
                                    weather.list[0].wind.deg.toString()
                                }deg`,
                            }}
                            className="w-5 inline mb-2 mr-1"
                        />
                        {weather.list[0].wind.speed}
                    </span>
                </p>
                <p className="flex justify-between border-b-2 border-dotted my-2">
                    <span><img src={wind} alt="wind_icon" className="w-7 inline mb-1" />Wind gust</span>
                    <span>{weather.list[0].wind.gust}</span>
                </p>
                <p className="flex justify-between border-b-2 border-dotted my-2">
                    <span><img src={pressure} alt="pressure_icon" className="w-7 inline mb-1 me-1" />Pressure</span>
                    <span>{weather.list[0].main.pressure} hpa</span>
                </p>
                <p className="flex justify-between border-b-2 border-dotted my-2">
                    <span><img src={humidity} alt="humidity_icon" className="w-7 inline mb-1 me-1" />Humidity</span>
                    <span>{weather.list[0].main.humidity}%</span>
                </p>
                <p className="flex justify-between border-b-2 border-dotted my-2">
                    <span><img src={clouds} alt="clouds_icon" className="w-7 inline mb-1 me-1" />Cloud coverage</span>
                    <span>{weather.list[0].clouds.all}%</span>
                </p>
                <p className="flex justify-between border-b-2 border-dotted my-2">
                    <span><img src={visibility} alt="visibility_icon" className="w-7 inline mb-1 me-1" />Visibility</span>
                    <span>{weather.list[0].visibility} m</span>
                </p>
                <p className="flex justify-between border-b-2 border-dotted my-2">
                    <span><img src={sunrise} alt="sunrise_icon" className="w-7 inline mb-1 me-1" />Sunrise</span>
                    <span>
                        {new Date(
                            weather.city.sunrise * 1000
                        ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </span>
                </p>
                <p className="flex justify-between border-b-2 border-dotted my-2">
                    <span><img src={sunset} alt="sunset_icon" className="w-7 inline mb-1 me-1" />Sunset</span>
                    <span>
                        {new Date(
                            weather.city.sunset * 1000
                        ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </span>
                </p>
                <p className="flex justify-between border-b-2 border-dotted my-2">
                    <span><img src={timezone} alt="timezone_icon" className="w-7 inline mb-1 me-1" />Timezone</span>
                    <span>
                        {weather.city.timezone > 0
                            ? "+" + weather.city.timezone / 60 / 60 + "h"
                            : weather.city.timezone / 60 / 60 + "h"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default CurrentWeatherDetails;
