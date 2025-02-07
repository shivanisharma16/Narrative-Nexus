import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { ArrowLeft, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
        <Search/>
        <input type='text' placeholder='search........' className='outline-none'/>
      </div>
      <div className='flex gap-5 items-center'>
      <Link href={"/"}>
        <Button>
          <ArrowLeft/> Back
        </Button>
      </Link>
     <UserButton/>
      </div>
    </div>
  )
}

export default Header
