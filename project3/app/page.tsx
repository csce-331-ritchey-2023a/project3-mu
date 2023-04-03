import Link from "next/link"
import { use } from "react"
import './globals.css'
async function getItems(){
  const res = await fetch(`${process.env.BASE_URL}/api/getItems`, {cache: "no-store"})
  if(!res.ok){
    console.log("result + ", res)
  }
  return await(res).json()
}

export default function Home() {
  const data = use(getItems())
  //console.log(data)
  return (
    <main>
      <nav className = "py-78 px-78 no-underline">
        <Link href = {"/customer"}>Go To Customer </Link>
        <Link href = {"/employee"}>Go To Employee </Link>
        <Link href = {"/manager"}>Go To Manager </Link>
      </nav>
      <div>
        {data.map((menuItem:any)=>{
        return(
          <ul className="text-3xl font-bold underline" key={menuItem.foodid}>
            <li>{menuItem.name}</li>
          </ul>
        )
      })}
      </div>
    </main>
  )
}
