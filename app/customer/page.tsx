'use client'
import Image from 'next/image'
import { use } from "react";
import 'app/globals.css'
import Link from 'next/link'
import { useState, useEffect } from "react";

async function getImages(){
    const res = await fetch("/api/getImages", {cache: "no-store"})
    if(!res.ok){
      console.log("result + ", res)
    }
    return await(res).json()
}

// type Image = {
//     foodid: number
//     imageSrc: string
//     name: string
// }



const CITY_NAME = "College Station";

type WeatherData = {
  description: string;
  icon: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
};

export default function Customer(){
    const images = use(getImages())
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

    console.log(images)
    return(
      <main>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 " >
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image:any) => {
            return(
              <Link href={`/customer/${image.category}/${image.foodid}`} key={image.foodid}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 card-zoom">
              <div className="absolute inset-0 h-full w-full">
                  <Image
                  alt=""
                  src={image.imagesrc}
                  //fill={true}
                  width = "500"
                  height = "500"
                  object-fit="cover"
                  //placeholder="blur"
                  className="w-full h-full top-0 left-0 object-cover rounded-2xl card-zoom-image shadow-xlg"
                  />
                </div>
              </div>
              <h3 className="mt-4 capitalize hover:uppercase text-gray-700 text-center font-bold hover:text-blue-500">{image.name}</h3>
              </Link>
          )})}
      </div>
    </div>
    <div className="Weather_box_Customer" style={{ height: "auto", display: "flex", justifyContent: "center" }}>
    <h1>Current Weather in {CITY_NAME}</h1>
    <p>{description}</p>
    <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
    <p>Temperature: {(temperature * 9/5 - 459.67).toFixed(2)}°F</p>
    <p>Feels Like: {(feelsLike * 9/5 - 459.67).toFixed(2)}°F</p>
    <p>Humidity: {humidity}%</p>
  </div>
  </main>
    )
}