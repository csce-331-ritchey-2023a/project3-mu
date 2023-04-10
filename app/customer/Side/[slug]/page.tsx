import Image from 'next/image'
import { use } from "react"
import 'app/globals.css'

async function getImages(){
    const res = await fetch(`${process.env.BASE_URL}/api/getImages`, {cache: "no-store"})
    if(!res.ok){
      console.log("result + ", res)
    }
    return await(res).json()
}

// type Image = {
//     foodid: number
//     imageSrc: string
//     name: string
// }

export default function Customer({
  params,
}: {
  params: { slug: string };
}){
    const slug = params.slug
    //console.log(images)
    return(
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 " >
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <h1>{slug}</h1>
      </div>
    </div>
    )
}