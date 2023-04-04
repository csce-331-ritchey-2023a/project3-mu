import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {NextResponse} from "next/server"

//TODO: need to add fucnitonality for parsing through the multiple ints that can be passed
export async function GET(request: Request, { params } : {params:any}) {
    //fetch menu items with prisma
    const data = await prisma.menu_items_table.findMany({where: {"category":"Sand"}})
    //console.log(data)
    return NextResponse.json(data)
}
