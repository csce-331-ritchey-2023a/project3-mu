import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {NextResponse} from "next/server"

//TODO: need to add fucnitonality for parsing through the multiple ints that can be passed
export async function GET(request: Request, { params } : {params:any}) {
    //fetch menu items with prisma
    console.log("here")
    const data = await prisma.menu_items_table.findMany({where: {foodid :parseInt(params.id)}})
    return NextResponse.json(data)
}
