import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {NextResponse} from "next/server"

export async function GET(request: Request) {
  try{
    //fetch items photos with prisma
    const data = await prisma.sales.findMany({
      select: {
        "itemid":true, 
        "units_sold":true, 
        "cost_per_unit":true,
        "revenue_per_unit":true, 
        "weight_per_unit":true, 
        "name":true,
      }
    })
    console.log(data);
    return NextResponse.json(data)
  }catch(error){
    console.log('get_Z_Report error:', error);
    return null
  }
}
