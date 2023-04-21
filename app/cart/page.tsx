'use client'

import Link from "next/link"
import { use } from "react"
import '../globals.css'
import Image from 'next/image'
import ProductCard from "@/components/ProductCard"

async function getImagesProduct(){
    const res = await fetch(`${process.env.BASE_URL}/api/getImagesProduct`, {cache: "no-store"})
    if(!res.ok){
      console.log("result + ", res)
    }
    return await(res).json
}

export default function Home() {
    const products = use(getImagesProduct())
    console.log(products)
    return (
        <div>
        {products.map((product:any) => {
            <ProductCard key={product.id} product={product}/>
        })}
        </div>
    )
}