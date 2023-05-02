'use client'
import Image from 'next/image'
import 'app/globals.css'
import AddToCartBtn from '@/components/AddtoCartBtn'
import { use } from 'react';
import { Product } from '../../../../interfaces';

async function getItem(slug:string){
    let res = await fetch("/api/getItem/"+ slug, {cache: "no-store"})
    //console.log(`${process.env.BASE_URL}/api/getItem/`+params)
    if(!res.ok){
      console.log(res)
    }
    return await(res).json()
};

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
    let item = use(getItem(params.slug))
    //const parsed = (item[0]).json()
    //console.log((item[0]))
    let thisProduct:Product = {
      id: parseInt(item[0].foodid),
      name: (item[0].name),
      price: 10, // to be actual price
      imagePath:(item[0].imagesrc),
    };
    //console.log(thisProduct.imagePath)
    return(
      <main>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 card-zoom">
          <div className="absolute inset-0 h-full w-full">
            <Image
            alt=""
            src={thisProduct.imagePath}
            //fill={true}
            width = "500"
            height = "500"
            object-fit="cover"
            //placeholder="blur"
            className="w-full h-full top-0 left-0 object-cover rounded-2xl card-zoom-image shadow-xlg"
            />
          </div>
        </div>
        <AddToCartBtn product={thisProduct} />
      </main>
    )
}