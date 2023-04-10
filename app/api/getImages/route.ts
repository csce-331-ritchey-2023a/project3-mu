import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {NextResponse} from "next/server"

export async function GET(request: Request) {
  try{
    //fetch items photos with prisma
    const data = await prisma.menuimages.findMany({
      select: {
        "foodid":true, 
        "imagesrc":true, 
        "name":true,
        "category":true
      }
    })
    //console.log('getImages data:', data);
    return NextResponse.json(data)
  }catch(error){
    console.log('getImages error:', error);
    return null
  }
}
