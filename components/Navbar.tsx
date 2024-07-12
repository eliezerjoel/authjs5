import { auth } from '@/auth'
import Link from 'next/link'
import React from 'react'
import Logout from './Logout'


const Navbar = async() => {
    const session = await auth()
    return (
        <nav className='border-b bg-background w-full flex items-center'>
            <div className='flex w-full justify-between items-center my-4'>
                <Link className='font-bold' href="/">Home</Link>
                <div className='flex gap-x-5  items-center'>
                    <Link href="/middleware">Middleware</Link>
                    <Link href="/server">Server</Link>
                </div>
                <div>
                    {!session?.user ? (
                        <Link href="/sign-in">
                        <div className='bg-blue-700 px-4 py-2 text-sm rounded-lg'>Sign in</div>
                    </Link>
                    ): (
                        <>
                        <div>
                            {session?.user?.name}
                        </div>
                        <Logout />
                        </>
                    )}
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar