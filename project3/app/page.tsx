import { Inter } from 'next/font/google'
import Link from "next/link"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const inter = Inter({ subsets: ['latin'] })

async function getItems(){
  const res = await fetch("/api/getItems")
}

export default function Home() {
  return (
    <main>
      <div className = "py-78 px-78">
        <Link href = {"/dahsboard"}>Go To Dashboard </Link>
        <h1>getItems()</h1>
      </div>
    </main>
  )
}
