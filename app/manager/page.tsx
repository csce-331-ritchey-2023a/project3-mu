import Image from 'next/image'
import Link from 'next/link'
import { use } from "react"
import 'app/globals.css'
import React from "react";

async function Get_X_Report(){
  const res = await fetch(`${process.env.BASE_URL}/api/Get_X_Report`, {cache: "no-store"})
  if(!res.ok){
    console.log("result + ", res)
  }
  return await(res).json()
}

export default async function Manager() {

  const X_Report = use(Get_X_Report())
  return (
    <main>
      <div className="banner">
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
            <input type="text" placeholder="Enter Starting Date (MM/DD/YYYY)" />
          </div>
          <div className="Input_Box">
            <input type="text" placeholder="Enter Ending Date (MM/DD/YYYY)" />
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

        <div className="whitebox" style={{ height: "auto" }}>
          {X_Report.map((item: any) => (
          <div key={item.foodid}>
            <p>Name: {item.name}, Food ID: {item.foodid}, Price: {item.price}</p>
          </div>
          ))}
        </div>
      </div>
    </main>
  )
}

