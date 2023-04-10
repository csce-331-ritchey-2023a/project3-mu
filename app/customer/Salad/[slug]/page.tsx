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
    const images = use(getImages())
    const slug = params.slug
    //console.log(images)
    return(
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 " >
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {/* <h1>{slug}</h1> */}
          {images.map((image:any) => {
            return(
              <a href={`/path/to/${image.id}`} className="group" key={image.foodid}>
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
              </a>
          )})}
      </div>
    </div>
    )
}