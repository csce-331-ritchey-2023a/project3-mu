import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {NextResponse} from "next/server"

export async function GET(request: Request, { params }: {params: { slug:string}}) {
  try{
    //fetch items photos with prisma
    const data = await prisma.menuimages.findMany({
      select: {
        "foodid":true, 
        "imagesrc":true, 
        "name":true,
        "category":true
      },where:{
        "foodid":parseInt(params.slug),
      }
    })
    console.log('Checkout data:', NextResponse.json(data));
    return NextResponse.json(data)
  }catch(error){
    console.log('Checkout error:', error);
    return null
  }
}