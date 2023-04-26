import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {NextResponse} from "next/server"

export async function GET(request: Request) {
  try{
    //fetch items photos with prisma
    const data = await prisma.menu_items_table.findMany({
      select: {
        "foodid":true, 
        "name":true, 
        "price":true,
        "category":true, 
        "num_sold":true, 
        "num_in_stock":true,
        "min_in_stock": true
      }
    })
    console.log(data);
    return NextResponse.json(data)
  }catch(error){
    console.log('getImages error:', error);
    return null
  }
}
