"use client"
import { useState, useEffect } from "react";

//const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const CITY_NAME = "College_Station";

type WeatherData = {
  description: string;
  icon: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
};

export default function Weather(): JSX.Element {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=College%20Station&appid=4c370ab7005159f6a3bb849c76366723`
    )
      .then((res) => res.json())
      .then((data) => {
        const { weather, main } = data;
        const description = weather[0].description;
        const icon = weather[0].icon;
        const temperature = main.temp;
        const feelsLike = main.feels_like;
        const humidity = main.humidity;
        setWeatherData({ description, icon, temperature, feelsLike, humidity });
      })
      .catch((error) => console.error(error));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { description, icon, temperature, feelsLike, humidity } = weatherData;

  return (
    <div>
      <h1>Current Weather in {CITY_NAME}</h1>
      <p>{description}</p>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
      <p>Temperature: {temperature}°C</p>
      <p>Feels Like: {feelsLike}°C</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
}