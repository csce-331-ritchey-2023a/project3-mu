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
      <nav>
        <Link href = {"/employee"}>Go To Employee</Link>
        <Link href = {"/customer"}>Go To Customer</Link>
      </nav>
    </main>
  )
}