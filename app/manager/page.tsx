"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useState, useEffect } from "react";
import 'app/globals.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })
const CITY_NAME = "College Station";

async function Get_X_Report(){
  const res = await fetch(`http://localhost:3000/api/Get_X_Report`, {cache: "no-store"})
  if(!res.ok){
    console.log("result + ", res)
  }
  return await(res).json()
}

async function Get_Z_Report(){
  const res = await fetch(`http://localhost:3000/api/Get_Z_Report`, {cache: "no-store"})
  if(!res.ok){
    console.log("result + ", res)
  }
  return await(res).json()
}

type WeatherData = {
  description: string;
  icon: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
};

export default function Manager() {
  const [X_Report, setX_Report] = useState<any[]>([]);
  const [Z_Report, setZ_Report] = useState<any[]>([]);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await Get_X_Report();
      setX_Report(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await Get_Z_Report();
      setZ_Report(data);
    }
    fetchData();
  }, []);

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
    <main>
      <div className="banner">
        <nav className = "py-78 px-78 no-underline">
          <div className="links">
            <Link href="/customer">Customer View</Link>
            <Link href="/employee">Employee View</Link>
          </div>
        </nav>
        <div className="bannerLogo">
          <Image
            src="https://api.dineoncampus.com/files/images/f864520e-32e6-442e-92ab-b77a90523603.png"
            alt="Houston Street Subs Logo"
            width={80}
            height={80}
            className = "logoImage"
          />
        </div>
        <h1 className="bannerTitle">Manager Dashboard</h1>
      </div>

      <div className="center">
        <div className="pair">

          <button type="button" className="textbox">
            Execute Sales Report
          </button>
          <div className="Input_Box">
            <input type="text" placeholder="Enter Starting Date" />
          </div>
          <div className="Input_Box">
            <input type="text" placeholder="Enter Ending Date" />
          </div>

          <button type="button" className="textbox">
            Execute Excess Report
          </button>
          <div className="Input_Box">
            <input type="text" placeholder="Enter information" />
          </div>

          <button type="button" className="textbox">
            Execute Report:
          </button>
          <div className="dropdown">
            <select>
              <option value="item1">X Report</option>
              <option value="item2">Z Report</option>
            </select>
          </div>
        </div>

        <div className="center">
          <div className="pair">
            <div className="whitebox" style={{ height: "auto" }}>
              {X_Report.map((item: any) => (
                <div key={item.foodid}>
                  <p>Name: {item.name}, Food ID: {item.foodid}, Price: {item.price}</p>
                </div>
              ))}
            </div>

            <div className="whitebox_Wide" style={{ height: "auto" }}>
              {Z_Report.map((item: any) => (
                <div key={item.foodid}>
                  <p>Name: {item.name}, Item ID: {item.itemid}, Units Sold: {item.units_sold}</p>
                </div>
              ))}
            </div>

            <div className="whitebox" style={{ height: "auto" }}>
              {X_Report.map((item: any) => (
                <div key={item.foodid}>
                  <p>Name: {item.name}, Food ID: {item.foodid}, Price: {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="Weather_box" style={{ height: "auto", display: "flex", justifyContent: "center" }}>
          <h1>Current Weather in {CITY_NAME}</h1>
          <p>{description}</p>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
          <p>Temperature: {(temperature * 9/5 - 459.67).toFixed(2)}°F</p>
          <p>Feels Like: {(feelsLike * 9/5 - 459.67).toFixed(2)}°F</p>
          <p>Humidity: {humidity}%</p>
        </div>

      </div>
    </main>
  )
}