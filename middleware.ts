// export {auth as middleware} from '@/auth'

import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/middlewareprotected"]

export default async function middleware(request: NextRequest) {
    const session = await auth()
    const isProtected = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    )
    if(!session?.user && isProtected){
        const absoluteUrl = new URL("/", request.nextUrl.origin)
        return NextResponse.redirect(absoluteUrl.toString())
}
return NextResponse.next()
}