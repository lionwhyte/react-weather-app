import React, { useState, useEffect, useRef } from "react";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import HourlyWeatherForecast from "./HourlyWeatherForecast";
import SearchForm from "./SearchForm";
import { fetchWeather } from "./api";
import loader from "./assets/loader.gif";
import background4 from "./assets/background.gif";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showWeatherDetails, setShowWeatherDetails] = useState(false);
    const [units, setUnits] = useState("metric");
    const previousUnits = useRef("");

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather(
            city,
            setWeather,
            setError,
            setLoading,
            setShowWeatherDetails,
            units, 
        );
    };

    const toggleUnits = () => {
        units === "metric"
            ? setUnits("imperial")
            : setUnits("metric");
    };

    useEffect(() => {
        if (weather && previousUnits.current !== units) {
            fetchWeather(
                weather.city.name,
                setWeather,
                setError,
                setLoading,
                setShowWeatherDetails,
                units,
            );
        }
        previousUnits.current = units;
    }, [weather, units, city]);

    return (
        <div
            style={{ backgroundImage: `url(${background4})` }}
            className="w-full lg:h-screen p-4 bg-cover bg-no-repeat bg-center flex flex-col"
        >
            <div className="flex justify-end items-center">
                <span>Metric</span>
                <label className="relative mx-2 inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onClick={toggleUnits}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
                </label>
                <span>Imperial</span>
            </div>
            <SearchForm
                city={city}
                handleCityChange={handleCityChange}
                handleSubmit={handleSubmit}
            />
            {loading && (
                <img
                    src={loader}
                    alt="loader"
                    className="w-16 absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"
                />
            )}
            {error && <p className="text-red-500">{error}</p>}
            {weather && (
                <CurrentWeatherDetails
                    weather={weather}
                    fadein={`${showWeatherDetails && "animate-fade-in"}`}
                    units={units}
                />
            )}
            {weather && (
                <HourlyWeatherForecast
                    weather={weather}
                    fadein={`${showWeatherDetails && "animate-fade-in"}`}
                />
            )}
        </div>
    );
};

export default Weather;
