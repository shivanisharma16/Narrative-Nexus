"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Headers() {
  const {user,isSignedIn}=useUser();
  return (
    <div className='p-5 border-b shadow-sm ' >
      <div className='flex items-center justify-between'>
        <Image src={"/logo.svg"} alt='logo' height={80} width={120}/>
        {isSignedIn?
        <div className='flex items-center gap-5'>
        <Link href={'/dashboard'}>
        <Button variant={'outline'}>Dashboard</Button>
        </Link>
        <UserButton/>
        </div>:
        <SignInButton><Button>Get Started</Button></SignInButton>
        }

      </div>
    </div>
  )
}

export default Headers
