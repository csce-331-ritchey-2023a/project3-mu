'use client'

import Image from 'next/image'
import { use } from "react"
import 'app/globals.css'
import Link from 'next/link'
async function getImagesSoup(){
    const res = await fetch("/api/getImagesSoup", {cache: "no-store"})
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

export default function Customer(){
    const images = use(getImagesSoup())
    //console.log(images)
    return(
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 " >
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image:any) => {
            return(
              <Link href={`/customer/${image.category}/${image.foodid}`} className="group" key={image.foodid}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 card-zoom">
                  <Image
                  alt=""
                  src={image.imagesrc}
                  //fill={true}
                  width = "500"
                  height = "500"
                  object-fit="cover"
                  //placeholder="blur"
                  className="w-full h-full top-0 left-0 object-cover rounded-2xl card-zoom-image shadow-xlg"
                  />
              </div>
              <h3 className="mt-4 capitalize hover:uppercase text-gray-700 text-center font-bold hover:text-blue-500">{image.name}</h3>
              </Link>
          )})}
      </div>
    </div>
    )
}