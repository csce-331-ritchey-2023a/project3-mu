import { PrismaClient } from '@prisma/client'
import { json } from 'node:stream/consumers'
const prisma = new PrismaClient()
import {NextResponse} from "next/server"
export async function GET(request: Request, { params } : {params:any}) {
    //fetch menu items with prisma
    const pars = params.id
    const data = await prisma.menu_items_table.findMany({where: {foodid :parseInt(params.id)}})
    return NextResponse.json(data)
}
