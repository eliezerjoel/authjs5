import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined 
}

export const db = global.prisma || undefined

if(process.env.NODE_ENV !== "production") global.prisma = db