import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

// Figure out how to add buttons and change their color or style while stil navigating
// Add navigation back to the home page
// Add buttons to lead to missing functions

export default function Manager() {
    return (
      <main>
        <h1>This is the Manager UI</h1>
        <nav>
        <Link href = {"/employee"}>Go To Employee      </Link>
        <Link href = {"/customer"}>Go To Customer      </Link>
        </nav>
      </main>
    )
  }