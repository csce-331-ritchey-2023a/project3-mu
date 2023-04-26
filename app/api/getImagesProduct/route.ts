import { Product } from '../../../interfaces';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {NextResponse} from "next/server"

export async function GET(request: Request) {
  try {
    // fetch items photos with prisma
    const data = await prisma.menuimages.findMany({
      select: {
        "foodid": true, 
        "imagesrc": true, 
        "name": true,
        "category": true
      }
    })

    // map the data to Product interface
    const products: Product[] = data.map((item) => {
      return {
        id: item.foodid,
        name: item.name !== null ? item.name : "",
        price: 0, // replace with actual price
        imagePath: item.imagesrc !== null ? item.imagesrc : ""
      }
    })
    //console.log('Products Data: \n', (products))
    return NextResponse.json(products);
  } catch (error) {
    console.log('getImages error:', error);
    return null;
  }
}
