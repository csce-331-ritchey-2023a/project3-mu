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
          <div className="textbox">
            Top 5 Sellers
          </div>
          <div className="dropdown">
            <select>
              <option value="item1">Today</option>
              <option value="item2">Yesterday</option>
              <option value="item3">04/09/2023</option>
              <option value="item4">04/08/2023</option>
            </select>
          </div>
          <div className="textbox">
            Most Used Item
          </div>
          <div className="dropdown">
            <select>
              <option value="item1">Today</option>
              <option value="item2">Yesterday</option>
              <option value="item3">04/09/2023</option>
              <option value="item4">04/08/2023</option>
            </select>
          </div>
          <div className="textbox">
            Order By
          </div>
          <div className="dropdown">
            <select>
              <option value="item1">Yesterday</option>
              <option value="item2">04/09/2023</option>
              <option value="item3">04/08/2023</option>
              <option value="item4">04/07/2023</option>
            </select>
          </div>
        </div>
        <div className="whitebox">
          This is a white text box below the pairings.
        </div>
      </div>
    </main>
  )
}