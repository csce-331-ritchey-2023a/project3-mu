'use client'

import Image from 'next/image'
import { use } from "react"
import { Inter } from 'next/font/google'
import React from "react";
import GoogleTranslate from "./GoogleTranslate"

const inter = Inter({ subsets: ['latin'] })


const TopBar = () => {
  return (
    <div className="flex flex-row justify-between w-full px-8 py-4 bg-gray-200 bg-navy" >
      <div className="text-lg font-bold text-gray-800 flex-grow-0 mr-80">SUBS</div>
      <div className="text-lg font-bold text-gray-800 flex-grow-0 ml-20 mr-80">SALADS</div>
      <div className="text-lg font-bold text-gray-800 flex-grow-0 ml-10 mr-80">SOUPS</div>
      <div className="text-lg font-bold text-gray-800 flex-grow ml-20"> SIDES</div>
    </div>
  );
};

async function getName(){
  const res = await fetch("/api/getName", {cache: "no-store"})
  if(!res.ok){
    console.log("result + ", res)
  }
  return await(res).json()
}

async function getName2(){
  const res = await fetch("/api/getName2", {cache: "no-store"})
  if(!res.ok){
    console.log("result + ", res)
  }
  return await(res).json()
}

async function getName3(){
  const res = await fetch("/api/getName3", {cache: "no-store"})
  if(!res.ok){
    console.log("result + ", res)
  }
  return await(res).json()
}

async function getName4(){
  const res = await fetch("/api/getName4", {cache: "no-store"})
  if(!res.ok){
    console.log("result + ", res)
  }
  return await(res).json()
}

const GrayBlock = () => {
  return (
    <div className="absolute bottom-0 right-0 m-4 p-4 bg-gray-300 rounded-lg shadow-md">
      <div className="text-lg font-bold mb-2 border-b-2 border-black pb-2">Order</div>
      <div className="text-sm mb-4">1x.................TurkMuf - Half</div>
      <div className="text-sm mb-4">1x.................Fountain Drink  </div>
      <div className="text-sm">1x.................Baked Chips </div>
    </div>
  );
};



export default function Employee() {
  //obtain menu item data per type : sandwich
  const names = use(getName())
  const names2 = use(getName2())
  const names3 = use(getName3())
  const names4 = use(getName4())
  return (
    <main>
      <div className="banner">
        <div className="bannerLogo">
          <Image
            src="https://api.dineoncampus.com/files/images/f864520e-32e6-442e-92ab-b77a90523603.png"
            alt="Houston Street Subs Logo"
            width={80}
            height={80}
            className="logoImage"
          />
        </div>
        <h1 className="bannerTitle">Employee Dashboard</h1>
      </div>

      <div className="p-4 relative">
        <TopBar />
        <GoogleTranslate/>
        
        <div className="flex justify-between mr-1">
          <div className="flex flex-col items-start">
            {names.map((item: any) => (
              <button
                key={item.foodid}
                className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-3 m-1 rounded-lg text-lg w-32 h-32"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-start">
            {names2.map((item: any) => (
              <button
                key={item.foodid}
                className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-3 m-4 rounded-lg text-lg w-32 h-32"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-start">
            {names3.map((item: any) => (
              <button
                key={item.foodid}
                className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-3 m-4 rounded-lg text-lg w-32 h-32"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-start">
            {names4.map((item: any) => (
              <button
                key={item.foodid}
                className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-3 m-4 rounded-lg text-lg w-32 h-32"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <GrayBlock />
      </div>
    </main>
  );
}