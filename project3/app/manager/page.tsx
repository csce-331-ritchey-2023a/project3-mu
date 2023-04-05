import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Manager() {
    return (
      <main>
        <h1>This is the Manager UI</h1>
        <nav>
        <Link href = {"/employee"}>Go To Employee      </Link>
        </nav>
      </main>
    )
  }