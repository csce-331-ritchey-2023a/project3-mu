'use client'
import 'app/globals.css'
import AddToCartBtn from '@/components/AddtoCartBtn'
import { use } from 'react';
import { Product } from '../../../../interfaces';

async function getItem(slug:string){
    let res = await fetch("http://localhost:3000/api/getItem/"+ slug, {cache: "no-store"})
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
    console.log((item[0]))
    let thisProduct:Product = {
      id: parseInt(item[0].foodid),
      name: (item[0].name),
      price: 10, // to be actual price
      imagePath:(item[0].imagesrc),
    };
    console.log("COMPLETE")
    return(
    // <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 " >
    //   <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <AddToCartBtn product={thisProduct} />
    //   </div>
    // </div>
    )
}