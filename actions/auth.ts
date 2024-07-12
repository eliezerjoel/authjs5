'use server'

import {signIn, signOut} from '@/auth'
import { db } from '@/db'
import email from 'next-auth/providers/email'
import { revalidatePath } from 'next/cache'

const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({where: {email: email}})
        return user
    } catch (error) {
        console.error(error)
        return null
        
    }
}

export const login = async(provider: string) =>{
    await signIn(provider, {redirectTo: "/"})
    revalidatePath("/")
}

export const logout = async ()=>{
    await signOut({redirectTo: "/"})
    revalidatePath("/")
}

export const CredentialLogin = async(formData: FormData) =>{
    const rawFormData = {
        email: formData.get('email'),
        password: formData.get('password'),
        redirectTo: "/",}

        const user = await getUserByEmail(formData.get('email') as string)
        try {
            await signIn("credentials", rawFormData)
        } catch (error) {
            console.error(error)
        }
        revalidatePath("/")

    }