import { Inter } from 'next/font/google'
import Link from "next/link"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function getItems(){
  const res = await fetch(`${process.env.BASE_URL}/api/getItems`)
  if(!res.ok){
    console.log("result + ", res)
  }
  return res.json()
}

export default async function Home() {
  const data: {name: string}[] = await getItems()
  console.log(data)
  return (
    <main>
      <nav className = "py-78 px-78">
        <Link href = {"/customer"}>Go To Customer </Link>
        <Link href = {"/employee"}>Go To Employee </Link>
        <Link href = {"/manager"}>Go To Manager </Link>
      </nav>
      {data.map((menuItem)=>(
        <h1>{menuItem.name}</h1>
      ))}
    </main>
  )
}
