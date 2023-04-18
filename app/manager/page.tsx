import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import 'app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Manager() {
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
        <div className="whitebox">
          For Sales and Excess Reports Enter Data in MM/DD/YYYY form
        </div>
      </div>
    </main>
  )
}

