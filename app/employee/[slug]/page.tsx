'use client'
import Image from 'next/image';
import 'app/globals.css'
import AddToCartBtn from '@/components/AddtoCartBtn'
import { use } from 'react';
import { Product } from '../../../interfaces';

async function getItem(slug:string){
    let res = await fetch("/api/getItem2/"+ slug, {cache: "no-store"})
    //console.log(`${process.env.BASE_URL}/api/getItem/`+slug)
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

export default function Employee({
  params,
}: {
  params: { slug: string };
}){
    let item = use(getItem(params.slug))
    //const parsed = (item[0]).json()
    //console.log((item[0]))
    let thisProduct:Product = {
      id: parseInt(item.foodid),
      name: (item.name),
      price: 10, // to be actual price
      imagePath:"../LinkedIn.jpg",
    };
    //console.log("COMPLETE")
    return(
      <main>
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 card-zoom">
      <div className="absolute inset-0 h-full w-full">
        <Image
            alt=""
            src="https://api.dineoncampus.com/files/images/f864520e-32e6-442e-92ab-b77a90523603.png"
            //fill={true}
            width = "500"
            height = "500"
            object-fit="cover"
            //placeholder="blur"
            className="w-full h-full top-0 justify-center left-0 object-cover rounded-2xl card-zoom-image shadow-xlg"
            />
        </div>

      </div>
      <AddToCartBtn product={thisProduct} />
    </main>
    )
}
