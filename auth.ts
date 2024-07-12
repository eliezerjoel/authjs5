import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import bcrypt from 'bcryptjs'
import Credentials from 'next-auth/providers/credentials'
import { db } from './db'

export const {handlers: {GET, POST}, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(db),
    session:{strategy: "jwt"},
    providers: [Github({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
    }), Credentials({
        name: 'Credentials',
        credentials:{
            email: {},
            password: {}
        },
        authorize: async (credentials, req) => {
            if(!credentials.email || !credentials.password){
                return null
            }
            const email = credentials.email as string
            const password = credentials.password as string
            let user: any = await db?.user.findUnique({
                where: {email}})
            if(!user){
                user = await db?.user.create({
                    data: {email,
                        password}
                })
            }else{
                const isMatch = (user.password === password)
                if(!isMatch){
                    throw new Error('Invalid password')
                }
        }
        return user
    }
    })],
})
