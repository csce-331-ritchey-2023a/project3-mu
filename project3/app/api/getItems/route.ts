import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {NextResponse} from "next/server"

export async function GET(request: Request) {
  try{
    //fetch menu items with prisma
    const data = await prisma.menu_items_table.findMany({select: {"name":true}})
    return NextResponse.json(data)
  }catch(error){
    return NextResponse.error()
  }
}
