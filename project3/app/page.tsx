import { Inter } from 'next/font/google'
import Link from "next/link"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className = "py-78 px-78">
        <Link href = {"/dahsboard"}>Go To Dashboard </Link>
      </div>
    </main>
  )
}
