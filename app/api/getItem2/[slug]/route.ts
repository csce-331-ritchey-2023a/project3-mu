import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {NextResponse} from "next/server"

export async function GET(request: Request, { params }: {params: { slug:string}}) {
  try{
    //fetch items photos with prisma
    const data = await prisma.menu_items_table.findMany({
      where:{
        "foodid":parseInt(params.slug),
      }
    })
    //console.log('getImages data:', NextResponse.json(data));
    return NextResponse.json(data)
  }catch(error){
    console.log('getItems error:', error);
    return null
  }
}
